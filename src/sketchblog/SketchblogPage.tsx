import { PostCollection } from "@/sketchblog/PostCollection";
import { SketchblogSidebar } from "@/sketchblog/SketchblogSidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SketchblogFooter } from "@/sketchblog/SketchblogFooter";

export function SketchblogPage() {
  const [category, setCategory] = useState<string | null>(null);
  const params = useParams();
  const category_safe = params.category ? params.category : "drawings";
  document.body.classList.add("sketchblog_background");
  useEffect(() => {
    setCategory(category_safe);
  }, [category_safe]);

  return (
    <>
      <div className="sketchblog_page_background"></div>
      <div className="sketchblog_page_container">
        <PostCollection category={category} />
        <SketchblogSidebar setCategory={setCategory} />
        <SketchblogFooter />
      </div>
    </>
  );
}
