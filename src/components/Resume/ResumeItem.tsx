import { View, Text, Circle, Svg } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const ResumeItem = (props) => {
  return (
    <View style={styles.margin_bottom_10}>
      <View
        style={[
          styles.flex_direction_row,
          styles.justify_content_space_between,
        ]}
      >
        <View
          style={[
            styles.font_size_9pt,
            styles.font_family_helvetica_bold,
            styles.flex_direction_column,
            styles.margin_right_30,
          ]}
        >
          <Text style={styles.font_size_8pt}>
            {props.startDateMonth.toUpperCase()}
            {" - "}
            {props.endDateMonth.toUpperCase()}
          </Text>
          <Text>
            {props.startDateYear}
            {" - "}
            {props.endDateYear}
          </Text>
        </View>
        <View
          style={[
            styles.font_size_9pt,
            styles.font_family_helvetica_bold,
            styles.flex_direction_column,
            styles.margin_right_30,
          ]}
        >
          <Text
            style={[styles.color_blue_50, styles.font_family_helvetica_bold]}
          >
            {props.client_name_detail.toUpperCase()}
          </Text>
          <Text style={styles.font_family_helvetica_bold}>
            {props.jobTitle.toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={styles.margin_top_5}>
        <Text
          style={[
            styles.white_space_nowrap,
            styles.margin_bottom_1,
            styles.font_size_10pt,
          ]}
        >
          {props.description1}
        </Text>
        {props.description2 && (
          <View style={[styles.display_flex, styles.flex_direction_row]}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text
              style={[
                styles.white_space_nowrap,
                styles.margin_bottom_1,
                styles.font_size_10pt,
              ]}
            >
              {props.description2}
            </Text>
          </View>
        )}
        {props.description3 && (
          <View style={[styles.display_flex, styles.flex_direction_row]}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text
              style={[
                styles.white_space_nowrap,
                styles.margin_bottom_1,
                styles.font_size_10pt,
              ]}
            >
              {props.description3}
            </Text>
          </View>
        )}
        {props.description4 && (
          <View style={[styles.display_flex, styles.flex_direction_row]}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text
              style={[
                styles.white_space_nowrap,
                styles.margin_bottom_1,
                styles.font_size_10pt,
              ]}
            >
              {props.description4}
            </Text>
          </View>
        )}
        {props.description5 && (
          <View style={[styles.display_flex, styles.flex_direction_row]}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text
              style={[
                styles.white_space_nowrap,
                styles.margin_bottom_1,
                styles.font_size_10pt,
              ]}
            >
              {props.description5}
            </Text>
          </View>
        )}
        {props.description6 && (
          <View style={[styles.display_flex, styles.flex_direction_row]}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text
              style={[
                styles.white_space_nowrap,
                styles.margin_bottom_1,
                styles.font_size_10pt,
              ]}
            >
              {props.description6}
            </Text>
          </View>
        )}
        {props.description7 && (
          <View style={[styles.display_flex, styles.flex_direction_row]}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text
              style={[
                styles.white_space_nowrap,
                styles.margin_bottom_1,
                styles.font_size_10pt,
              ]}
            >
              {props.description7}
            </Text>
          </View>
        )}
        {props.description8 && (
          <View style={[styles.display_flex, styles.flex_direction_row]}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text
              style={[
                styles.white_space_nowrap,
                styles.margin_bottom_1,
                styles.font_size_10pt,
              ]}
            >
              {props.description8}
            </Text>
          </View>
        )}
        {/*props.technologies_used && (
          <Text style={[styles.white_space_nowrap, styles.margin_bottom_1, styles.font_size_10pt]}>
            Technologies Used: {props.technologies_used}
          </Text>
        )*/}
      </View>
    </View>
  );
};
