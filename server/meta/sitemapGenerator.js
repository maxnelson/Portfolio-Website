export const sitemapGenerator = (req, res) => {
	const hostname = "https://maxnelsonwebsite.com";
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${hostname}/</loc>
	</url>
</urlset>`;
	res.header("Content-Type", "application/xml");
	res.send(xml);
};
