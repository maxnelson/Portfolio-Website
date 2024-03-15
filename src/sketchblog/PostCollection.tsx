import { SketchblogPost } from "@/sketchblog/SketchblogPost";
import { getPostCategory } from "@/sketchblog/GetPostCategory";
import { useState, useEffect } from "react";

export function PostCollection(props) {
  const [collectionDataObject, setCollectionDataObject] = useState([]);
  const postCollectionQueryResult = getPostCategory(props.category);

  useEffect(() => {
    if (postCollectionQueryResult.status === "success") {
      const collectionDataObject = postCollectionQueryResult.data.docs
        .map((doc) => {
          const docData = doc.data();
          docData.id = doc.id;
          return docData;
        })
        .reverse();
      collectionDataObject.sort((a, b) => {
        const dateA = new Date(a.date.seconds);
        const dateB = new Date(b.date.seconds);
        return dateB - dateA;
      });
      setCollectionDataObject(() => {
        return collectionDataObject;
      });
    }
  }, [postCollectionQueryResult.status, props.category]);

  return (
    <>
      <div className="post_collection_container">
        {collectionDataObject &&
          collectionDataObject.map((postData, index) => {
            return <SketchblogPost key={postData.id} postData={postData} />;
          })}
      </div>
    </>
  );
}
