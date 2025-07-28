import { LeftSidebar } from "@src/components/LeftSidebar";
import { Footer } from "@src/components/Footer/Footer";
export function ContactPage() {
	return (
		<>
			<div className="page_container">
				<div
					className="inner_page_container"
					style={{ display: "flex" }}>
					<div className="sidebar">
						<LeftSidebar />
					</div>
					<main className="main_section">
						<div>
							<h2 className="_margin-bottom--1rem">Contact</h2>
							<p className="line-height-1-5 color-777">
								Please feel free to send me an Email at&nbsp;
								<a
									className="external_link"
									href="mailto:maxnelson88@gmail.com"
									target="_blank"
									rel="noopener noreferrer">
									maxnelson88@gmail.com
								</a>
								.
							</p>
						</div>
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}
