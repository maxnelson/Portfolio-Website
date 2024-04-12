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

  document.body.classList.add("sketchblog_background");

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
          <div className="sketchblog_page_background"></div>
          <div className="sketchblog_detail_page_container">
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
                  <p className="post_date">
                    {postObject.date.toDate().toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="sketchblog_post_detail_description_container">
                <h2>{postObject.title}</h2>
                <div
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
