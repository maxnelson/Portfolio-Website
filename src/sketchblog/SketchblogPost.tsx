import { DateTime } from "luxon";
export function SketchblogPost(props) {
  const dateParsed = new Date(props.postData.date.toDate());
  const formattedDate =
    DateTime.fromJSDate(dateParsed).toFormat("MMMM dd, yyyy");
  return (
    <>
      <div
        className={"_margin-bottom--10rem post_format_" + props.postData.format}
      >
        {props.postData.images.map((image, index) => {
          return (
            <div className="post_image_container" key={index}>
              <a
                href={
                  "/sketchblog/" +
                  props.postData.category +
                  "/" +
                  props.postData.id
                }
              >
                <img src={image} alt="drawing" />
              </a>
            </div>
          );
        })}
        {props.postData.title && (
          <h2 className="_margin-bottom--1rem color-aaa">
            {props.postData.title}
          </h2>
        )}

        <p className="project_description color-777 _margin-bottom--1rem">
          {props.postData.shortDescription
            ? props.postData.shortDescription
            : null}
        </p>
        <div>
          <a
            href={
              "/sketchblog/" + props.postData.category + "/" + props.postData.id
            }
          >
            Read More{" "}
            <i className="fa-solid fa-chevron-right _font-size--12px _padding-bottom--2px"></i>
          </a>
        </div>
        <hr className="sketchblog_post_hr" />
        <div className="post_text_container">
          <p className="_font-size--9pt color-aaa">{formattedDate}</p>
        </div>
      </div>
    </>
  );
}
