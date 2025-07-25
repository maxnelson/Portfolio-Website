if (import.meta.env.DEV) {
	import("@/css/main.css");
}
if (import.meta.env.PROD) {
	const cssFiles = import.meta.glob("/src/css/main.css", { as: "url", eager: true });
	const href = cssFiles["/src/css/main.css"];
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	link.media = "print";
	link.onload = () => {
		link.media = "all";
	};
	document.head.appendChild(link);
}
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/Router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
