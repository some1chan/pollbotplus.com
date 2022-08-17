import Link from "next/link";

import Discord from "./svg/Discord";
import Twitter from "./svg/Twitter";

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
						className={props.selected ? "button" : "button hide"}
						onClick={() => scrollToTop()}
					>
						<h2 className="">PollBotPlus</h2>
					</div>
					<Link href="/">
						<h2
							className={
								props.selected ? "button hide" : "button"
							}
							tabIndex={0}
						>
							PollBotPlus
						</h2>
					</Link>

					<p>
						© {new Date().getFullYear()} PollBotPlus. All Rights
						Reserved.
					</p>
					<div className="footer-elements">
						<Link href="/privacy">Privacy Policy</Link>
						<Link href="/terms">Terms of Service</Link>
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