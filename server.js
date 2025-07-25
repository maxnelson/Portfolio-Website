import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static(path.join(__dirname, "dist")));
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
