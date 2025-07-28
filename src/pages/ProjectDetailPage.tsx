import { LeftSidebar } from "@src/components/LeftSidebar";
import { Footer } from "@src/components/Footer/Footer";
import { useState, useEffect } from "react";
import { getAboutPageData } from "@src/utility_functions/fetchData/getAboutPageData";

export function ProjectDetailPage() {
	const [aboutPageData, setAboutPageData] = useState<AboutPageData | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const fetchedAboutPageData: AboutPageData = await getAboutPageData();
			setAboutPageData(fetchedAboutPageData);
		};
		fetchData();
	}, []);
	const policy = window.trustedTypes.defaultPolicy;
	const html = policy?.createHTML(aboutPageData);

	return (
		<>
			<div className="page_container">
				<div
					className="inner_page_container"
					style={{ display: "flex" }}>
					<div className="sidebar">
						<LeftSidebar />
					</div>
					<main className="main_section">
						<div style={{ display: "flex" }}>
							<div className="width-20percent-minus-1rem _margin-right--1rem">
								<img
									loading="lazy"
									alt="Profile Picture"
									src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fassets%2Fprofile_picture.png?alt=media&token=e8c85ebc-3169-4c3b-8984-ded19c32e2f3"
								/>
							</div>
							<div className="width-80percent-minus-1rem _vertical-align--top _margin-left--1rem">
								<div
									dangerouslySetInnerHTML={{
										__html: html
									}}></div>
							</div>
						</div>
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}
