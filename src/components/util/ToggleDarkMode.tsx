export default function toggleDarkMode(turnTo: "light" | "dark") {
	const browserDefaultDark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const localStorageDark = localStorage.getItem("dark");
	const defaultsToDark = localStorageDark
		? localStorageDark == "t"
		: browserDefaultDark;
	const isCurrentlyDarkMode =
		document.documentElement.classList.contains("dark");

	// Only executes on certain icons
	if (
		(turnTo == "light" && !isCurrentlyDarkMode) ||
		(turnTo == "dark" && isCurrentlyDarkMode)
	) {
		console.log(`Skip exec from turning to ${turnTo}, as wrong icon`);
	}

	if (isCurrentlyDarkMode) {
		if (defaultsToDark) {
			console.log("Turned to light/default mode");
			localStorage.removeItem("dark");
		} else {
			console.log("Turned to light mode");
			localStorage.setItem("dark", "f");
		}
		document.documentElement.classList.remove("dark");
	} else {
		if (defaultsToDark) {
			console.log("Turned to dark/default mode");
			localStorage.removeItem("dark");
		} else {
			localStorage.setItem("dark", "t");
			console.log("Turned to dark mode");
		}
		document.documentElement.classList.add("dark");
	}
}
