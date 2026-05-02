import { useParams } from "react-router-dom";
import { getPost } from "@src/sketchblog/GetPostCategory";
import { useState, useEffect } from "react";
import { SketchblogSidebar } from "@src/sketchblog/SketchblogSidebar";
import { DocumentData } from "@firebase/firestore";
import { SketchblogFooter } from "@src/sketchblog/SketchblogFooter";

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
	const policy = window.trustedTypes.defaultPolicy;
	const html = policy?.createHTML(postObject?.description);

	return (
		<>
			{postObject && (
				<>
					<div className="sketchblog_post_detail_page_container">
						<div>
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
											<a href={image} target="_blank" rel="noreferrer">
												<img src={image} alt="Blog Post Image" />
											</a>
										</div>
									);
								})}
								<hr className="sketchblog_post_hr" />
								<div className="post_text_container">
									<p className="_font-size--9pt _color--var_gray-125_">
										{postObject.date.toDate().toLocaleDateString("en-US", {
											month: "short",
											day: "2-digit",
											year: "numeric"
										})}
									</p>
								</div>
							</div>

							<div className="sketchblog_post_detail_description_container _vertical-align--top">
								<h2 className="_margin-bottom--1rem _margin-top--1rem _color--var_gray-125_">
									{postObject.title}
								</h2>
								<div
									className="_font-size--11pt _color--var_gray-400_ _list-style-position--inside"
									dangerouslySetInnerHTML={{ __html: html }}
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
