if (import.meta.env.DEV) {
	import("@src/css/main.css");
}
if (import.meta.env.PROD) {
	//PRELOAD MAIN CSS LINK
	const mainCSSLink = document.createElement("link");
	mainCSSLink.rel = "preload";
	mainCSSLink.as = "style";
	mainCSSLink.href = "/assets/main.css";
	document.head.appendChild(mainCSSLink);
	document.head.appendChild(mainCSSLink);
	//PRELOAD HOMEPAGE JS CHUNK
	const homepageJSLink = document.createElement("link");
	homepageJSLink.rel = "modulepreload";
	homepageJSLink.href = "/assets/HomePage.js";
	document.head.appendChild(homepageJSLink);
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
