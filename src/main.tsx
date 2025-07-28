if (import.meta.env.DEV) {
	import("@src/css/main.css");
}
if (import.meta.env.PROD) {
	const cssFiles = import.meta.glob("/src/css/main.css", {
		query: "?url",
		import: "default",
		eager: true
	});
	const href = cssFiles["/src/css/main.css"];
	const link = document.createElement("link");
	link.rel = "preload";
	link.as = "style";
	link.href = href;
	link.onload = () => {
		const realLink = document.createElement("link");
		realLink.rel = "stylesheet";
		realLink.href = href;
		document.head.appendChild(realLink);
	};
	document.head.appendChild(link);
}
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@src/Router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {}
	}
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
