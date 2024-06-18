import { View, Text } from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import { ContactInfoItem } from "./ContactInfoItem";

export const ResumeHeader = () => {
  const email_icon =
    "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z";
  const phone_icon =
    "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z";
  const website_icon =
    "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z";
  return (
    <View
      style={[styles.flex_direction_row, styles.justify_content_space_between]}
    >
      <View>
        <Text
          style={[
            styles.font_size_30pt,
            styles.font_family_helvetica_bold,
            styles.margin_left_2n,
          ]}
        >
          Max Nelson
        </Text>
        <Text
          style={[
            //styles.font_family_helvetica_bold,
            styles.font_size_15pt,
          ]}
        >
          Web Developer
        </Text>
      </View>

      <View style={[styles.margin_top_5]}>
        <ContactInfoItem
          icon={email_icon}
          width="14"
          height="14"
          viewBox="0 0 512 512"
          text="maxnelson88@gmail.com"
        />
        <ContactInfoItem
          icon={phone_icon}
          width="11"
          height="11"
          viewBox="0 0 512 512"
          text="+1.510-508-1392"
          svgStyles={styles.margin_left_3}
        />
        <ContactInfoItem
          icon={website_icon}
          width="15"
          height="13"
          viewBox="0 0 512 612"
          text="maxnelsonwebsite.com"
          type="link"
          linkSRC="https://maxnelsonwebsite.com"
        />
      </View>
    </View>
  );
};
