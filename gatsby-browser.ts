import "./src/styles/index.scss";

export function onClientEntry() {
	const browserDefaultDark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	if (
		(browserDefaultDark && !localStorage.getItem("dark")) ||
		(!browserDefaultDark && localStorage.getItem("dark"))
	) {
		document.documentElement.classList.add("dark");
	}
}
