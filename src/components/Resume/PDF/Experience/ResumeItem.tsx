import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@src/components/Resume/resumeStyles";
import { BulletPoint } from "@src/components/Resume/PDF/Experience/BulletPoint";
import { DurationLockup } from "@src/components/Resume/PDF/Experience/DurationLockup";

export const ResumeItem = (props) => {
	return (
		<>
			<View style={[props.customStyle]}>
				<View style={[styles.flex_direction_row, styles.align_items_center]}>
					<View
						style={[
							styles.display_flex,
							styles.flex_direction_column,
							styles.width_80_percent
						]}>
						<Text
							style={[
								styles.color_blue_50,
								styles.font_family_helvetica_bold,
								{
									fontSize: `${props.titleFontSize}pt`
								}
							]}>
							{props.clientName}
						</Text>
						<Text style={[styles.font_family_helvetica_bold, styles.font_size_11pt]}>
							{props.jobTitle}
						</Text>
					</View>
					<DurationLockup
						startDateMonth={props.startDateMonth}
						startDateYear={props.startDateYear}
						endDateMonth={props.endDateMonth}
						endDateYear={props.endDateYear}
					/>
				</View>

				<View style={[styles.font_size_medium, props.itemLineHeight]}>
					{props.description1 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description1}
							bullet={false}
						/>
					)}
					{props.description2 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description2}
							bullet={"bullet"}
						/>
					)}
					{props.description3 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description3}
							bullet={"bullet"}
						/>
					)}
					{props.description4 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description4}
							bullet={"bullet"}
						/>
					)}
					{props.description5 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description5}
							bullet={"bullet"}
						/>
					)}
					{props.description6 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description6}
							bullet={"bullet"}
						/>
					)}
					{props.description7 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description7}
							bullet={"bullet"}
						/>
					)}
					{props.description8 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description8}
							bullet={"bullet"}
						/>
					)}

					{props.description9 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description9}
							bullet={"bullet"}
						/>
					)}
					{props.description10 && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.description10}
							bullet={"bullet"}
						/>
					)}
					{/*props.technologies_used && (
						<BulletPoint
							marginBetweenExperiences={props.marginBetweenExperiences}
							spaceBetweenBullets={props.spaceBetweenBullets}
							text={props.technologies_used}
							bullet={"technologies"}
						/>
					)*/}
				</View>
			</View>
		</>
	);
};
