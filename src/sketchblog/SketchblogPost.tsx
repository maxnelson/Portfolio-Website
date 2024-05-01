import { DateTime } from "luxon";
export function SketchblogPost(props) {
  const dateParsed = new Date(props.postData.date.toDate());
  const formattedDate =
    DateTime.fromJSDate(dateParsed).toFormat("MMMM dd, yyyy");
  return (
    <>
      <div
        className={"margin-bottom-10rem post_format_" + props.postData.format}
      >
        {
          <h2 className="margin-bottom-2rem color-aaa">
            {props.postData.title}
          </h2>
        }
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
        <div
          className="project_description color-777 margin-top-2rem margin-bottom-1rem"
          dangerouslySetInnerHTML={{ __html: props.postData.description }}
        />
        <hr className="sketchblog_post_hr" />
        <div className="post_text_container">
          <p className="font-size-9pt color-aaa">{formattedDate}</p>
        </div>
      </div>
    </>
  );
}
