import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
// import Button from "./Button";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";

export default function Header(props: { selected?: "home" | "pricing" }) {
	function toggleDarkMode() {
		const browserDefaultDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const localStorageDark = localStorage.getItem("dark");
		const defaultsToDark = localStorageDark
			? localStorageDark == "t"
			: browserDefaultDark;
		const isCurrentlyDarkMode =
			document.documentElement.classList.contains("dark");

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

	return (
		<header className="bg-wrapper">
			<div className="width-wrapper p-wrapper">
				<div className="nav-bar">
					<div style={{ display: "flex", alignItems: "center" }}>
						<Link to="/">
							<div className="branding" tabIndex={0}>
								<StaticImage
									src={"../images/favicon.svg"}
									alt="Logo"
									width={32}
									height={32}
								/>
							</div>
						</Link>
						<Link to="/">
							<h1>PollBotPlus</h1>
						</Link>
					</div>
					<ul className="nav-links mid">
						<li className="nav-item">
							<Link to="/">
								<a
									className={
										props.selected == "home"
											? "selected"
											: ""
									}
								>
									Home
								</a>
							</Link>
						</li>
						{/* <li className="nav-item">
								<a href="#">Docs</a>
							</li> */}
						<li className="nav-item">
							<a
								className={
									props.selected == "pricing"
										? "selected"
										: ""
								}
								href=""
							>
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a href="https://dsc.gg/pollbotplus-support">
								Support Server
							</a>
						</li>
					</ul>
					<div className="nav-links">
						<button className="button" onClick={toggleDarkMode}>
							<Sun />
							<Moon />
						</button>
						{/* <div className="divider" />
							<Button type="secondary" label="Dashboard" /> */}
					</div>
				</div>
			</div>
		</header>
	);
}
