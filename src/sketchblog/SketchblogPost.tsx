import { getStorage } from "firebase/storage";
import { DateTime } from "luxon";
export function SketchblogPost(props) {
  const dateParsed = new Date(props.postData.date.toDate());
  const formattedDate =
    DateTime.fromJSDate(dateParsed).toFormat("MMMM dd, yyyy");
  //const storage = getStorage();
  return (
    <>
      <div
        className={"post_container post_featured_" + props.postData.featured}
      >
        {props.postData.images.map((image, index) => {
          return (
            <div className="post_image_container" key={index}>
              <img src={image} alt="drawing" />
            </div>
          );
        })}
        <div className="post_text_container">
          <p className="post_date">{formattedDate}</p>
        </div>
      </div>
    </>
  );
}
