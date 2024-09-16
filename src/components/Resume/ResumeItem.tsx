import { View, Text, Svg, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { BulletPoint } from "@/components/Resume/BulletPoint";

export const ResumeItem = (props) => {
  return (
    <>
      <View
        style={[
          styles.margin_top_5,
          styles.font_size_medium,
          styles.flex_direction_row,
          styles.align_items_center,
        ]}
      >
        <View
          style={[
            styles.display_flex,
            styles.flex_direction_column,
            styles.width_75_percent,
          ]}
        >
          <Text
            style={[styles.color_blue_50, styles.font_family_helvetica_bold]}
          >
            {props.clientName}
          </Text>
          <Text style={[styles.font_family_helvetica_bold]}>
            {props.jobTitle}
          </Text>
        </View>
        <View
          style={[
            styles.flex_direction_row,
            styles.width_20_percent,
            styles.align_items_center,
          ]}
        >
          <Svg
            width="12"
            height="12"
            viewBox="0 0 512 512"
            style={[styles.margin_right_5]}
          >
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
      </View>

      <View style={styles.font_size_medium}>
        <Text style={[styles.margin_top_2, styles.margin_bottom_2]}>
          {props.description1 && props.description1}
        </Text>
        {props.description2 && <BulletPoint text={props.description2} />}
        {props.description3 && <BulletPoint text={props.description3} />}
        {props.description4 && <BulletPoint text={props.description4} />}
        {props.description5 && <BulletPoint text={props.description5} />}
        {props.technologies_used && (
          <Text style={[styles.margin_bottom_3]}>
            <Text style={[styles.font_family_helvetica_bold]}>
              Technologies Used:
            </Text>{" "}
            {props.technologies_used}
          </Text>
        )}
      </View>
    </>
  );
};
