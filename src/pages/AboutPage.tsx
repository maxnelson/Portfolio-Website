import { LeftSidebar } from "@src/components/LeftSidebar";
import { Footer } from "@src/components/Footer";
import { useState, useEffect } from "react";
import { getAboutPageData } from "@src/utility_functions/fetchData/getAboutPageData";

interface AboutPageProps {
	setProjectDescriptionVisible: (visible: boolean) => void;
}

interface AboutPageData {
	aboutPageDataField: string;
}

export function AboutPage({ setProjectDescriptionVisible }: AboutPageProps) {
	const [aboutPageData, setAboutPageData] = useState<AboutPageData | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const fetchedAboutPageData: AboutPageData = await getAboutPageData();
			setAboutPageData(fetchedAboutPageData);
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="page_container">
				<div className="sidebar _display--inline-block">
					<LeftSidebar setProjectDescriptionVisible={setProjectDescriptionVisible} />
				</div>
				<div className="main_section about_page">
					<div className="_display--inline-block width-20percent-minus-1rem _margin-right--1rem">
						<img
							loading="lazy"
							alt="Profile Picture"
							src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-410901.appspot.com/o/portfolio_website%2Fassets%2Fprofile_picture.png?alt=media&token=e8c85ebc-3169-4c3b-8984-ded19c32e2f3"
						/>
					</div>
					<div className="_display--inline-block width--80percent-minus-1rem _vertical-align--top _margin-left--1rem">
						{aboutPageData ?
							<div
								dangerouslySetInnerHTML={{
									__html: aboutPageData.aboutPageDataField
								}}></div>
						:	null}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
