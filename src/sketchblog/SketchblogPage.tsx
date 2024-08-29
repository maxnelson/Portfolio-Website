import { PostCollection } from "@/sketchblog/PostCollection";
import { SketchblogSidebar } from "@/sketchblog/SketchblogSidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SketchblogFooter } from "@/sketchblog/SketchblogFooter";

export function SketchblogPage() {
  const [category, setCategory] = useState<string | null>(null);
  const params = useParams();
  const category_safe = params.category ? params.category : "drawings";
  document.body.classList.add("_background-image--var_--image-1_");
  document.body.classList.add("background-repeat--repeat");
  useEffect(() => {
    setCategory(category_safe);
  }, [category_safe]);

  return (
    <div className="width-70-percent margin-left-auto margin-right-auto margin-top-10rem display-flex flex-wrap-wrap justify-content-space-between">
      <PostCollection category={category} />
      <SketchblogSidebar setCategory={setCategory} />
      <SketchblogFooter />
    </div>
  );
}
