import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { firestore_database } from "@/utility_functions/firebaseConfig";
import { useQuery, useQueries } from "@tanstack/react-query";

export const getPostCategory = (category) => {
  return useQuery({
    queryKey: ["postCategory", { category: category }],
    queryFn: fetchPostCategory,
  });
};

const fetchPostCategory = async ({ queryKey }) => {
  const allPosts = collection(firestore_database, "sketchblog");

  const allPostsFiltered = query(allPosts, where("category", "==", "drawings"));

  const allPostsFilteredDocs = await getDocs(allPostsFiltered);

  if (allPostsFilteredDocs) {
    return allPostsFilteredDocs;
  } else {
    throw new Error("Document does not exist");
  }
};
