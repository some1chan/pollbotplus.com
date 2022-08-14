import { Link } from "react-router-dom";
import Discord from "./svg/Discord";
import Twitter from "./svg/Twitter";
// import Logo from "../svg/PollBotPlus-min.svg";

const Footer = (props: { selected?: "home" }) => {
	const scrollToTop = () => {
		console.log("Scroll to top");
		window.scrollTo({
			top: 0,
			behavior: "smooth", // for smoothly scrolling
		});
	};

	return (
		<footer>
			<div
				className="width-wrapper p-wrapper"
				style={{ display: "grid" }}
			>
				<div style={{ gridColumn: 1 }}>
					<div
						id="a"
						className={
							props.selected ? "logo button" : "logo button hide"
						}
						onClick={() => scrollToTop()}
					>
						{/* <img
							src={Logo}
							className="logo"
							alt="Logo"
							width="2rem"
							height="2rem"
						/> */}
						<h2 className="logo">PollBotPlus</h2>
					</div>
					<Link
						to="/"
						className={
							props.selected ? "logo button hide" : "logo button"
						}
					>
						{/* <img
							src={Logo}
							className="logo"
							alt="Logo"
							width="2rem"
							height="2rem"
						/> */}
						<h2 className="logo">PollBotPlus</h2>
					</Link>

					<p>
						© {new Date().getFullYear()} PollBotPlus. All Rights
						Reserved.
					</p>
					<div className="footer-elements">
						<Link to="/privacy">Privacy Policy</Link>
						<Link to="/terms">Terms of Service</Link>
					</div>
				</div>
				<div className="social-icon-group">
					<div className="icon baseline">
						<a
							href="https://dsc.gg/pollbotplus-support"
							aria-label="Discord"
						>
							<Discord />
						</a>

						<a
							href="https://twitter.com/pollbotplus"
							aria-label="Twitter"
						>
							<Twitter />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
