import { useEffect, useRef } from "react";
import { PDFViewer, Document, Page, View } from "@react-pdf/renderer";
import { ResumeHeader } from "@src/components/Resume/PDF/Header/ResumeHeader";
import { ResumeFooter } from "@src/components/Resume/PDF/Footer/ResumeFooter";
import { ResumeItem } from "@src/components/Resume/PDF/Experience/ResumeItem";

import { resumeStyles as styles } from "@src/components/Resume/resumeStyles";
import { ResumeSectionHeader } from "@src/components/Resume/PDF/ResumeSectionHeader";
import { SummarySection } from "@src/components/Resume/PDF/Header/SummarySection";

export const SinglePageResume = (props) => {
	const resumeModeOptions = ["compact", "regular"];
	const resumeMode = resumeModeOptions[0];
	let itemLineHeight;
	let spaceBetweenBullets;

	if (resumeMode === "compact") {
		itemLineHeight = styles.line_height_0;
		spaceBetweenBullets = [styles.margin_top_0, styles.margin_bottom_0];
	} else if (resumeMode === "regular") {
		itemLineHeight = styles.line_height_0;
		spaceBetweenBullets = [styles.margin_top_2, styles.margin_bottom_2];
	}
	const resumeDataSorted = Object.entries(props.resumeData?.section1 || {}).sort(
		([, a], [, b]) => parseInt(b.startDateYear) - parseInt(a.startDateYear)
	);
	const keyOrderMap = Object.fromEntries(resumeDataSorted.map(([key], idx) => [key, idx]));
	const sortedVisibleExperiences = props.visibleExperiences
		.slice()
		.sort((a, b) => (keyOrderMap[a] ?? Infinity) - (keyOrderMap[b] ?? Infinity));

	const count = useRef(0);
	useEffect(() => {
		count.current++;
	}, [props.sortedVisibleExperiences]);
	try {
		return (
			<>
				<PDFViewer
					key={count.current}
					style={{
						width: "100%",
						height: "75rem"
					}}>
					<Document>
						<Page size="LETTER">
							<View style={styles.page_container}>
								<View style={styles.lineHeight}>
									<ResumeHeader
										name={props.resumeData?.name.toUpperCase()}
										title={props.resumeData?.title}
										email={props.resumeData?.contactInfo.email}
										phone={props.resumeData?.contactInfo.phone}
										website={props.resumeData?.contactInfo.website}
									/>
									<SummarySection
										summary1={props.resumeData?.summary1}
										summary2={props.resumeData?.summary2}
									/>

									<ResumeSectionHeader title={"Experience"} />
									<View>
										{props.resumeData?.section1 &&
											Array.isArray(sortedVisibleExperiences) &&
											sortedVisibleExperiences.map((name) => {
												return (
													<View key={name}>
														<ResumeItem
															marginBetweenExperiences={
																props.marginBetweenExperiences
															}
															spaceBetweenBullets={
																spaceBetweenBullets
															}
															itemLineHeight={itemLineHeight}
															titleFontSize={props.titleFontSize}
															clientName={
																props.resumeData?.section1[name]
																	.clientName
															}
															jobTitle={
																props.resumeData?.section1[name]
																	.jobTitle
															}
															startDateMonth={
																props.resumeData?.section1[name]
																	.startDateMonth
															}
															endDateMonth={
																props.resumeData?.section1[name]
																	.endDateMonth
															}
															startDateYear={
																props.resumeData?.section1[name]
																	.startDateYear
															}
															endDateYear={
																props.resumeData?.section1[name]
																	.endDateYear
															}
															description1={
																props.resumeData?.section1[name]
																	.description1
															}
															description2={
																props.resumeData?.section1[name]
																	.description2
															}
															description3={
																props.resumeData?.section1[name]
																	.description3
															}
															description4={
																props.resumeData?.section1[name]
																	.description4
															}
															description5={
																props.resumeData?.section1[name]
																	.description5
															}
														/>
													</View>
												);
											})}
										<ResumeFooter
											educationTitle={
												props.resumeData?.section2.education.title
											}
											degree={props.resumeData?.section2.education.degree}
											school={props.resumeData?.section2.education.school}
											startDateYear={
												props.resumeData?.section2.education.startDateYear
											}
											endDateYear={
												props.resumeData?.section2.education.endDateYear
											}
											description={
												props.resumeData?.section2.education.description
											}
											skillsTitle={props.resumeData?.section2.skills.title}
											skill1Title={
												props.resumeData?.section2.skills.skill1.title
											}
											skill2Title={
												props.resumeData?.section2.skills.skill2.title
											}
											skill3Title={
												props.resumeData?.section2.skills.skill3.title
											}
											skill4Title={
												props.resumeData?.section2.skills.skill4.title
											}
											skill1Description={
												props.resumeData?.section2.skills.skill1.description
											}
											skill2Description={
												props.resumeData?.section2.skills.skill2.description
											}
											skill3Description={
												props.resumeData?.section2.skills.skill3.description
											}
											skill4Description={
												props.resumeData?.section2.skills.skill4.description
											}
										/>
									</View>
								</View>
							</View>
						</Page>
					</Document>
				</PDFViewer>
			</>
		);
	} catch (error) {
		console.warn(error);
		//debugger;
	}
};
