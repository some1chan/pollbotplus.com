import React from "react";
import { useEffect } from "react";

export default function Layout({ children }: any) {
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
	return <div id="root">{children}</div>;
}
