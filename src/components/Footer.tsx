import { Link } from "gatsby";
import Discord from "./svg/Discord";
import Twitter from "./svg/Twitter";
import * as React from "react";

export default function Footer() {
	return (
		<footer>
			<div
				className="width-wrapper p-wrapper"
				style={{ display: "grid" }}
			>
				<div style={{ gridColumn: 1 }}>
					<Link
						to="/"
						style={{
							height: "auto",
							display: "inline-block",
						}}
					>
						<h2 className={"button"}>PollBotPlus</h2>
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
}
