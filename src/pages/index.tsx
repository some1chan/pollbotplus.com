import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Header from "../components/Header";

// @ts-ignore
import * as Landing from "../styles/Landing.module.scss";

const INVITE_URL =
	"https://discord.com/oauth2/authorize?client_id=804245390642642965&scope=bot&permissions=2416438336";

export default function IndexPage() {
	return (
		<Layout>
			<div>
				<div className={Landing.bgWrapperLanding}>
					<Header selected="home" />
					<div className="width-wrapper p-wrapper">
						<div className={Landing.topLanding}>
							<div className={Landing.textAndButtons}>
								<div>
									<h2>Make Beautiful Polls on Discord.</h2>
									<p>
										Meet PollBotPlus, a Discord poll bot
										refined for the power user, who care
										about how their polls look.
									</p>
									<div className={Landing.buttons}>
										<Button
											type="primary"
											label="Add to Server"
											href={INVITE_URL}
											target="_blank"
										/>
										<div className={Landing.divider}></div>
										<Button
											type="secondary"
											label="See Features"
											// href="https://dsc.gg/pollbotplus-support"
											target="_blank"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className={`${Landing.pollGallery} width-wrapper p-wrapper`}
					style={{ textAlign: "center" }}
				>
					<div className={Landing.imagContainer}>
						<div
							className={`${Landing.image} ${Landing.lightImage}`}
						>
							<StaticImage
								src={"../images/PBP AnimesRealSlashCommand.png"}
								alt="A poll made by a user"
								quality={100}
								formats={["png"]}
							/>
						</div>
						<div
							className={`${Landing.image} ${Landing.darkImage}`}
						>
							<StaticImage
								src={
									"../images/PBP AnimesRealSlashCommand Dark.png"
								}
								alt="A poll made by a user"
								quality={90}
								formats={["png"]}
							/>
						</div>
					</div>
				</div>

				<div className={Landing.trustedBanner}>
					<div
						className={`${Landing.items} width-wrapper p-wrapper p2-wrapper`}
					>
						<h2>Trusted by 2,600+ servers.</h2>
						<ul>
							<li>
								<a
									href="https://discord.gg/battlezone"
									target="_blank"
									rel="noopener noreferrer"
								>
									<StaticImage
										src={
											"../images/guild-icons/guildicon1.png"
										}
										alt="BattleZone.gg"
										quality={100}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://discord.gg/cYMGA77"
									target="_blank"
									rel="noopener noreferrer"
								>
									<StaticImage
										src={
											"../images/guild-icons/guildicon2.png"
										}
										alt="Game Dev Underground"
										quality={100}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://discord.gg/XGtzRJCsBY"
									target="_blank"
									rel="noopener noreferrer"
								>
									<StaticImage
										src={
											"../images/guild-icons/guildicon3.png"
										}
										alt="Karuta's Kit"
										quality={100}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://discord.gg/XEFmHcjppy"
									target="_blank"
									rel="noopener noreferrer"
								>
									<StaticImage
										src={
											"../images/guild-icons/guildicon4.png"
										}
										alt="Seasalt's Karuta Shore"
										quality={100}
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div
					className={`${Landing.elegance} width-wrapper p-wrapper p2-wrapper`}
				>
					<h2>Elegance through Power.</h2>
					<p>
						Using PollBotPlus’s powerful command system, users can
						design polls to their liking.
					</p>
				</div>
				<Footer selected="home" />
			</div>
		</Layout>
	);
}

export function Head() {
	return (
		<>
			<title>PollBotPlus | Make Beautiful Polls on Discord.</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
		</>
	);
}
