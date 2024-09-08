import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { firestore_database } from "#root/src/utility_functions/firebaseConfig.js";
import { useQuery } from "@tanstack/react-query";

export const getPostCategory = (category) => {
  return useQuery({
    queryKey: ["postCategory", { category: category }],
    queryFn: fetchPostCategory,
  });
};

const fetchPostCategory = async ({ queryKey }) => {
  const allPosts = collection(firestore_database, "sketchblog");

  const allPostsFiltered = query(
    allPosts,
    where("category", "==", queryKey[1].category)
  );

  const allPostsFilteredDocs = await getDocs(allPostsFiltered);

  if (allPostsFilteredDocs) {
    return allPostsFilteredDocs;
  } else {
    throw new Error("Document does not exist");
  }
};

export const getPost = (id) => {
  return useQuery({
    queryKey: ["post", { id: id }],
    queryFn: fetchPost,
  });
};

const fetchPost = async ({ queryKey }) => {
  const post = doc(firestore_database, "sketchblog", queryKey[1].id);
  const postDoc = await getDoc(post);

  if (postDoc.exists()) {
    return postDoc;
  } else {
    throw new Error("Document does not exist");
  }
};
