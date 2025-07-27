import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sitemapGenerator } from "#root/server/meta/sitemapGenerator.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static(path.join(__dirname, "dist")));

app.use(
	"/assets",
	express.static(path.join(__dirname, "dist/assets"), {
		maxAge: "1y",
		immutable: true
	})
);

app.use(express.static("public"));
app.get("/sitemap.xml", sitemapGenerator);
app.get("/robots.txt", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "robots.txt"));
});
app.use(
	helmet({
		strictTransportSecurity: {
			maxAge: 500,
			includeSubDomains: true,
			preload: true
		},
		crossOriginEmbedderPolicy: { policy: "require-corp" },
		crossOriginOpenerPolicy: { policy: "same-origin" },
		frameguard: { action: "deny" },
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'"],
				scriptSrc: [
					"'self'",
					"https://www.googletagmanager.com",
					"https://www.google-analytics.com",
					"https://www.gstatic.com"
				],
				connectSrc: [
					"'self'",
					"https://firestore.googleapis.com",
					"https://www.google-analytics.com",
					"https://www.googleapis.com",
					"https://firebase.googleapis.com",
					"https://firebaseinstallations.googleapis.com",
					"https://www.googletagmanager.com"
				],
				imgSrc: [
					"'self'",
					"https://www.google-analytics.com",
					"https://www.googletagmanager.com",
					"https://www.google.com",
					"data:"
				],
				styleSrc: ["'self'", "https://fonts.googleapis.com"],
				fontSrc: ["'self'", "https://fonts.gstatic.com"],
				frameAncestors: ["'none'"],
				requireTrustedTypesFor: ["'script'"],
				crossOriginOpenerPolicy: { policy: "same-origin" }
			}
		}
	})
);

app.get("/{*splat}", (req, res, next) => {
	if (req.accepts("html")) {
		res.sendFile(path.join(__dirname, "dist", "index.html"));
	} else {
		console.warn("Request not accepted as HTML, passing to next middleware");
		next();
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
