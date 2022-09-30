import * as React from "react";
import { Link } from "gatsby";

import Sun from "./svg/Sun";
import Moon from "./svg/Moon";
import Logo from "./svg/Logo";

export default function Header(props: { selected?: "home" | "pricing" }) {
	function toggleDarkMode() {
		const isIFrame = window.self !== window.top;
		const browserDefaultDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const localStorageDark = !isIFrame
			? localStorage.getItem("dark")
			: false;
		const defaultsToDark = localStorageDark
			? localStorageDark == "t"
			: browserDefaultDark;
		const isCurrentlyDarkMode =
			document.documentElement.classList.contains("dark");

		if (isCurrentlyDarkMode) {
			if (defaultsToDark) {
				console.log("Turned to light/default mode");
				if (!isIFrame) localStorage.removeItem("dark");
			} else {
				console.log("Turned to light mode");
				if (!isIFrame) localStorage.setItem("dark", "f");
			}
			document.documentElement.classList.remove("dark");
		} else {
			if (defaultsToDark) {
				console.log("Turned to dark/default mode");
				if (!isIFrame) localStorage.removeItem("dark");
			} else {
				localStorage.setItem("dark", "t");
				if (!isIFrame) console.log("Turned to dark mode");
			}
			document.documentElement.classList.add("dark");
		}
	}

	return (
		<header className="bg-wrapper">
			<div className="width-wrapper p-wrapper">
				<div className="nav-bar">
					<Link
						to="/"
						style={{ display: "flex", alignItems: "center" }}
					>
						<Logo />
						<h1>PollBotPlus</h1>
					</Link>
					<ul className="nav-links mid">
						<li className={`nav-item`}>
							<Link to="/" activeClassName="selected">
								Home
							</Link>
						</li>
						{/* <li className="nav-item">
								<a href="#">Docs</a>
							</li> */}
						<li className="nav-item">
							<Link
								className={
									props.selected == "pricing"
										? "selected"
										: ""
								}
								to="/pricing"
							>
								Pricing
							</Link>
						</li>
						<li className="nav-item">
							<a
								href="https://pollbotplus.com/support"
								target="_blank"
							>
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
