import { View, Text, Circle, Svg } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";

export const ResumeItem = (props) => {
  return (
    <View style={styles.section_padding}>
      <View style={styles.job_header_container}>
        <View style={styles.job_header_info_container}>
          <Text style={styles.month_duration}>
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
        <View style={styles.job_header_info_container}>
          <Text style={styles.client_name}>
            {props.client_name_detail.toUpperCase()}
          </Text>
          <Text style={styles.job_title}>{props.jobTitle.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.job_description_container}>
        <Text style={styles.body_copy}>{props.description1}</Text>
        {props.description2 && (
          <View style={styles.bullet_point_container}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text style={styles.body_copy}>{props.description2}</Text>
          </View>
        )}
        {props.description3 && (
          <View style={styles.bullet_point_container}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text style={styles.body_copy}>{props.description3}</Text>
          </View>
        )}
        {props.description4 && (
          <View style={styles.bullet_point_container}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text style={styles.body_copy}>{props.description4}</Text>
          </View>
        )}
        {props.description5 && (
          <View style={styles.bullet_point_container}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text style={styles.body_copy}>{props.description5}</Text>
          </View>
        )}
        {props.description6 && (
          <View style={styles.bullet_point_container}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text style={styles.body_copy}>{props.description6}</Text>
          </View>
        )}
        {props.description7 && (
          <View style={styles.bullet_point_container}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text style={styles.body_copy}>{props.description7}</Text>
          </View>
        )}
        {props.description8 && (
          <View style={styles.bullet_point_container}>
            <Svg width={8} height={8}>
              <Circle cx="3" cy="5" r="1.25" fill="black" />
            </Svg>
            <Text style={styles.body_copy}>{props.description8}</Text>
          </View>
        )}
        {/*props.technologies_used && (
          <Text style={styles.body_copy}>
            Technologies Used: {props.technologies_used}
          </Text>
        )*/}
      </View>
    </View>
  );
};
