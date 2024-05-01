import { useParams } from "react-router-dom";
import { getPost } from "@/sketchblog/GetPostCategory";
import { useState, useEffect } from "react";
import { SketchblogSidebar } from "@/sketchblog/SketchblogSidebar";
import { DocumentData } from "@firebase/firestore";
import { SketchblogFooter } from "@/sketchblog/SketchblogFooter";

/*
type postObjectType = {
  category: string;
  date: {
    nanoseconds: number;
    seconds: number;
  };
  description: string;
  format: string;
  images: [];
  title: string;
};
*/

export function PostDescriptionPage() {
  const [postObject, setPostObject] = useState<DocumentData | null>(null);
  const params = useParams();
  const postDescription = getPost(params.postname);
  useEffect(() => {
    if (postDescription.status === "success") {
      const postObjectData = postDescription.data.data();
      setPostObject(postObjectData);
    }
  }, [postDescription.status]);

  return (
    <>
      {postObject && (
        <>
          <div></div>
          <div className="width-80-percent margin-left-auto margin-right-auto margin-top-10rem display-flex flex-wrap-wrap justify-content-space-between">
            <div className="width-85-percent">
              <div
                className={
                  "sketchblog_post_detail_images_container " +
                  "post_detail_images_container_" +
                  postObject.format
                }
              >
                {postObject.images.map((image, index) => {
                  return (
                    <div className="post_image_container" key={index}>
                      <img src={image} alt="drawing" />
                    </div>
                  );
                })}
                <hr className="sketchblog_post_hr" />
                <div className="post_text_container">
                  <p className="font-size-9pt color-aaa">
                    {postObject.date.toDate().toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="sketchblog_post_detail_description_container vertical-align-top">
                <h2 className="margin-bottom-1rem margin-top-1rem color-aaa">
                  {postObject.title}
                </h2>
                <div
                  className="font-size-11pt color-777 list-style-position-inside"
                  dangerouslySetInnerHTML={{ __html: postObject.description }}
                />
              </div>
            </div>
            <SketchblogSidebar />
            <SketchblogFooter />
          </div>
        </>
      )}
    </>
  );
}
