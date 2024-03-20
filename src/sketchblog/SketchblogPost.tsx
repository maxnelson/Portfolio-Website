import { getStorage } from "firebase/storage";
import { DateTime } from "luxon";
export function SketchblogPost(props) {
  const dateParsed = new Date(props.postData.date.toDate());
  const formattedDate =
    DateTime.fromJSDate(dateParsed).toFormat("MMMM dd, yyyy");
  //const storage = getStorage();
  return (
    <>
      <div className={"post_container post_format_" + props.postData.format}>
        {/*<h2>{props.postData.title}</h2>*/}
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
        {/*<p>{props.postData.description}</p>*/}
        <hr className="sketchblog_post_hr" />
        <div className="post_text_container">
          <p className="post_date">{formattedDate}</p>
        </div>
      </div>
    </>
  );
}
