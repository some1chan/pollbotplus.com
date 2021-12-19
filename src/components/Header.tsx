import React from "react";

import Button from "./Button";
import Logo from "../svg/PollBotPlus-min.svg";
import Sun from "../svg/Icon feather-sun.svg";
import Moon from "../svg/Icon feather-moon.svg";

const Header = () => {
	const [darkMode, setDarkMode] = React.useState(false);

	React.useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<header>
			<div className="navbar">
				<a href="#" style={{ alignItems: "center", display: "flex" }}>
					<img src={Logo} className="logo" alt="Logo" />
					{/* <Logo className="logo" /> */}
					<h1>PollBotPlus</h1>
				</a>
				<div className="nav-links">
					<li className="nav-item">
						<a href="#">Home</a>
					</li>
					<li className="nav-item">
						<a href="#">Features</a>
					</li>
					<li className="nav-item">
						<a href="#">Getting Started</a>
					</li>
					<li className="nav-item">
						<a href="#">FAQ</a>
					</li>
					<li className="nav-item">
						<a href="#">Premium</a>
					</li>
					<button
						className="button"
						onClick={() => setDarkMode(!darkMode)}
					>
						<div className="center">
							<img
								src={Sun}
								width="32px"
								height="33px"
								className="light-dark-toggle hide-on-dark"
								alt="Toggle Light Mode"
							/>
							<img
								src={Moon}
								width="32px"
								height="33px"
								className="light-dark-toggle hide-on-light"
								alt="Toggle Dark Mode"
								aria-label="Toggle Dark Mode"
							/>
						</div>
					</button>
					<div className="divider"></div>
					<Button type="secondary" label="Dashboard" />
				</div>
			</div>
		</header>
	);
};

export default Header;
