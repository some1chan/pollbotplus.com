import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "../svg/PollBotPlus-min.svg";
import Sun from "../svg/Icon feather-sun.svg?component";
import Moon from "../svg/Icon feather-moon.svg?component";

const Header = () => {
	return (
		<header>
			<div className="navbar">
				<div style={{ alignItems: "center", display: "flex" }}>
					<img src={Logo} className="logo" alt="Logo" />
					{/* <Logo className="logo" /> */}
					<h1>PollBotPlus</h1>
				</div>
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
					<button className="button">
						<Sun className="light-dark-toggle" />
						<Moon className="light-dark-toggle" />
					</button>
					<div className="divider"></div>
					<Button type="secondary" label="Dashboard" />
				</div>
			</div>
		</header>
	);
};

export default Header;
