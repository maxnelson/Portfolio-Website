import { SketchblogPost } from "@src/sketchblog/SketchblogPost";
import { getPostCategory } from "@src/sketchblog/GetPostCategory";
import { useState, useEffect } from "react";

interface PostData {
	id: string;
	date: { seconds: number };
	[key: string]: unknown;
}

export function PostCollection(props) {
	const [collectionDataObject, setCollectionDataObject] = useState<PostData[]>(
		[]
	);
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
				return dateB.getTime() - dateA.getTime();
			});
			setCollectionDataObject(() => {
				return collectionDataObject;
			});
		}
	}, [postCollectionQueryResult.status, props.category]);

	return (
		<>
			<div className="sketchblog_post_list_container">
				{collectionDataObject &&
					collectionDataObject.map((postData) => {
						return <SketchblogPost key={postData.id} postData={postData} />;
					})}
			</div>
		</>
	);
}
