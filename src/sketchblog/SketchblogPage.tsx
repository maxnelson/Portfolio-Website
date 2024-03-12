import { PostCollection } from "@/sketchblog/PostCollection";

export function SketchblogPage() {
  return (
    <>
      <div className="sketchblog_page_background">
        <div className="sketchblog_page_container">
          <PostCollection />
        </div>
      </div>
    </>
  );
}
