import { View, Text, Circle, Svg, Path } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const ResumeItem = (props) => {
  return (
    <>
      <View
        style={[
          styles.font_size_10pt,
          styles.margin_top_5,
          styles.flex_direction_row,
          styles.align_items_center,
          styles.vertical_align_middle,
        ]}
      >
        <View
          style={[
            styles.display_flex,
            styles.flex_direction_column,
            styles.width_60_percent,
          ]}
        >
          <Text style={[styles.font_family_helvetica_bold]}>
            {props.jobTitle}
          </Text>

          <Text>{props.client_name_detail}</Text>
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
          <Text style={[styles.font_size_10pt, styles.white_space_nowrap]}>
            {props.startDateYear + " - " + props.endDateYear}
          </Text>
        </View>
        {props.id !== "Chico" && (
          <View
            style={[
              styles.flex_direction_row,
              styles.width_20_percent,
              styles.align_items_center,
            ]}
          >
            <Svg style={[]} width="12" height="12" viewBox="0 0 512 512">
              <Path
                fill="#000"
                d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192C0 304 192 512 192 512zm0-384a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </Svg>
            <Text style={[]}>{props.location}</Text>
          </View>
        )}
      </View>

      <View>
        <Text
          wrap={false}
          style={[
            styles.margin_bottom_1,
            styles.margin_top_2,
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
        {/* props.technologies_used && (
          <Text
            style={[
              styles.white_space_nowrap,
              styles.margin_bottom_1,
              styles.font_size_10pt,
            ]}
          >
            Technologies Used: {props.technologies_used}
          </Text>
        )*/}
      </View>
    </>
  );
};
