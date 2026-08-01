import { PostCollection } from "@src/sketchblog/PostCollection";
import { SketchblogSidebar } from "@src/sketchblog/SketchblogSidebar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { SketchblogFooter } from "@src/sketchblog/SketchblogFooter";

export function SketchblogPage() {
	const [category, setCategory] = useState<string | null>(null);
	const params = useParams();
	const category_safe = params.category ? params.category : "drawings";
	useEffect(() => {
		setCategory(category_safe);
	}, [category_safe]);

	return (
		<div className="sketchblog_page_container">
			<div className="sketchblog_page_inner_container">
				<div className="sketchblog_page_content_container">
					<PostCollection category={category} />
					<SketchblogSidebar setCategory={setCategory} />
				</div>
				<SketchblogFooter />
			</div>
		</div>
	);
}
