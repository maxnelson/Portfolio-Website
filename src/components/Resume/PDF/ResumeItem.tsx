import { View, Text, Svg, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { BulletPoint } from "@/components/Resume/PDF/BulletPoint";

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
							//styles.margin_bottom_1
						]}>
						<Text
							style={[
								styles.color_blue_50,
								styles.font_family_helvetica_bold,
								props.titleFontSize
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

export const DurationLockup = (props) => {
	return (
		<>
			<View
				style={[
					styles.flex_direction_row,
					styles.width_20_percent,
					styles.align_items_center
				]}>
				<Svg
					width="12"
					height="12"
					viewBox="0 0 512 512"
					style={[styles.margin_right_5]}>
					<Path
						fill="#000"
						d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
					/>
				</Svg>
				<Text style={[styles.font_size_small]}>
					{props.startDateMonth +
						" " +
						props.startDateYear +
						" - " +
						props.endDateMonth +
						" " +
						props.endDateYear}
				</Text>
			</View>
		</>
	);
};
