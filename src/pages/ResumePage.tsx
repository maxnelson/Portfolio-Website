import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeftSidebar } from "@/components/LeftSidebar";
import { ResumeHeader } from "@/components/Resume/ResumeHeader";
import { ResumeFooter } from "@/components/Resume/ResumeFooter";
import { ResumeItem } from "@/components/Resume/ResumeItem";
import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { resumeStyles as styles } from "@/components/Resume/resumeStyles";
import {
  resumeItemPropObjectApple,
  resumeItemPropObjectRubrik,
  resumeItemPropObjectApple2,
  resumeItemPropObjectCloudera,
} from "@/components/Resume/ResumeData";

export const ResumePage = () => {
  return (
    <PDFViewer style={{ width: "80%", height: "71rem" }}>
      <Document>
        <Page size="LETTER">
          <View style={styles.page_container}>
            <ResumeHeader />
            <View style={styles.section_padding}>
              <Text style={styles.section_title}>SUMMARY</Text>
              <Svg viewBox="0 0 0 0" width="570" height="10">
                <Line
                  x1="0"
                  y1="5"
                  x2="570"
                  y2="5"
                  strokeWidth={1}
                  stroke="black"
                />
              </Svg>
              <Text style={styles.body_copy}>
                Web Developer with 9+ years of experience developing
                maintainable web applications using Javascript, HTML5, CSS3,
                Python, Java, and integrating with a variety of web services,
                databases, and content repositories, such as Google App Engine
                and AEM.
              </Text>
            </View>
            <View>
              <Text style={styles.section_title}>EXPERIENCE</Text>
              <Svg viewBox="0 0 0 0" width="570" height="10">
                <Line
                  x1="0"
                  y1="5"
                  x2="570"
                  y2="5"
                  strokeWidth={1}
                  stroke="black"
                />
              </Svg>
              <ResumeItem {...resumeItemPropObjectApple} />
              <ResumeItem {...resumeItemPropObjectRubrik} />
              <ResumeItem {...resumeItemPropObjectApple2} />
              <ResumeItem {...resumeItemPropObjectCloudera} />
              <ResumeFooter />
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
