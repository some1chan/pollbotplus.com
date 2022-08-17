import { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Home from "./home";

export default function Index() {
	useEffect(() => {
		const browserDefaultDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		if (
			(browserDefaultDark && !localStorage.getItem("dark")) ||
			(!browserDefaultDark && localStorage.getItem("dark"))
		) {
			// document.body.classList.add("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<>
			<ScrollToTop />
			<Home />
		</>
	);
}
