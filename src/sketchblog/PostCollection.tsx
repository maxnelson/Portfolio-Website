import { SketchblogPost } from "@/sketchblog/SketchblogPost";
import { getPostCategory } from "@/sketchblog/GetPostCategory";
import { useState, useEffect } from "react";

export function PostCollection() {
  const [collectionDataObject, setCollectionDataObject] = useState([]);
  const postCollectionQueryResult = getPostCategory("drawing");

  useEffect(() => {
    if (postCollectionQueryResult.status === "success") {
      const collectionDataObject = postCollectionQueryResult.data.docs
        .map((doc) => {
          const docData = doc.data();
          docData.id = doc.id;
          return docData;
        })
        .reverse();
      console.log(collectionDataObject);
      setCollectionDataObject(() => {
        return collectionDataObject;
      });
    }
  }, [postCollectionQueryResult.status]);

  return (
    <>
      {collectionDataObject &&
        collectionDataObject.map((postData, index) => {
          return <SketchblogPost key={postData.id} postData={postData} />;
        })}
    </>
  );
}
