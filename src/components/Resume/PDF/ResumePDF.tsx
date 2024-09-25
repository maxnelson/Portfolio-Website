import { SinglePageResume } from "@/components/Resume/PDF/SinglePageResume";
import { MultiPageResume } from "@/components/Resume/PDF/MultiPageResume";

export const ResumePDF = (props) => {
  return (
    <>
      {props.resumeType === "single" ? (
        <SinglePageResume
          resumeData={props.resumeData}
        />
      ) : (
        <MultiPageResume
          resumeData={props.resumeData}
        />
      )}
    </>
  );
};
