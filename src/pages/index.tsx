import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Header from "../components/Header";
import SEO from "../components/SEO";

import { ReactComponent as User } from "../images/svg/user.svg";
import { ReactComponent as Clock } from "../images/svg/clock.svg";
import { ReactComponent as Tool } from "../images/svg/tool.svg";
import { ReactComponent as EyeOff } from "../images/svg/eye-off.svg";
import { ReactComponent as Lock } from "../images/svg/lock.svg";

// @ts-ignore
import * as Landing from "../styles/Landing.module.scss";
import { graphql, useStaticQuery } from "gatsby";

const INVITE_URL =
	"https://discord.com/oauth2/authorize?client_id=804245390642642965&scope=bot&permissions=2416438336";

export default function IndexPage() {
	const gatsbyRepoData = useStaticQuery(graphql`
		query {
			topgg {
				serverCount
			}
		}
	`);

	return (
		<Layout>
			<div className={Landing.bgWrapperLanding}>
				<Header selected="home" />
				<div className="width-wrapper p-wrapper">
					<div className={Landing.topLanding}>
						<div className={Landing.textAndButtons}>
							<div>
								<h2>Make Beautiful Polls on Discord.</h2>
								<p>
									Meet PollBotPlus, a Discord poll bot refined
									for the power user, who care about how their
									polls look.
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
				<div className={Landing.imageContainer}>
					<div className={`${Landing.image} ${Landing.lightImage}`}>
						<StaticImage
							src={"../images/PBP AnimesReal.png"}
							alt="A poll made by a user"
							formats={["png"]}
							loading="eager"
							quality={90}
						/>
					</div>
					<div className={`${Landing.image} ${Landing.darkImage}`}>
						<StaticImage
							src={"../images/PBP AnimesReal Dark.png"}
							alt="A poll made by a user"
							formats={["png"]}
							loading="eager"
							quality={90}
						/>
					</div>
				</div>
			</div>

			<div className={Landing.trustedBanner}>
				<div
					className={`${Landing.items} width-wrapper p-wrapper ${Landing.p2Wrapper}`}
				>
					<h2>
						Trusted by{" "}
						{(
							Math.floor(
								(gatsbyRepoData?.topgg?.serverCount ?? 2750) /
									100
							) * 100
						).toLocaleString()}
						+ servers.
					</h2>
					<ul>
						<li>
							<a
								href="https://discord.gg/battlezone"
								target="_blank"
								rel="noopener noreferrer"
							>
								<StaticImage
									src={"../images/guild-icons/guildicon1.png"}
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
									src={"../images/guild-icons/guildicon2.png"}
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
									src={"../images/guild-icons/guildicon3.png"}
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
									src={"../images/guild-icons/guildicon4.png"}
									alt="Seasalt's Karuta Shore"
									quality={100}
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div
				className={`${Landing.elegance} width-wrapper p-wrapper ${Landing.p3Wrapper}`}
			>
				<div>
					<h2>Elegance through Power.</h2>
					<p>
						Using PollBotPlus’s powerful command system, users can
						design polls to their liking.
					</p>
					<ul>
						<li>
							<User />
							Limit users to vote for one choice, or allow voting
							for multiple
						</li>
						<li>
							<Clock />
							Make timed polls, which lets a poll automatically
							close itself
						</li>
						<li>
							<Tool />
							Change when results are shown, or when the poll ends
						</li>
						<li>
							<EyeOff />
							Anonymous polls will hide which users voted for what
							choice
						</li>
						<li>
							<Lock />
							Semi-anonymous polls only let some users view who
							voted for what choice
						</li>
					</ul>
				</div>

				<div className={`${Landing.imageContainer}`}>
					<div className={`${Landing.image} ${Landing.lightImage}`}>
						<StaticImage
							src={"../images/PBP MovieNight.png"}
							alt="A poll made by a user"
							formats={["png"]}
							layout="fixed"
							quality={90}
						/>
					</div>
					<div className={`${Landing.image} ${Landing.darkImage}`}>
						<StaticImage
							src={"../images/PBP MovieNight Dark.png"}
							alt="A poll made by a user"
							formats={["png"]}
							width={539}
							height={542}
							quality={90}
						/>
					</div>
				</div>
			</div>
			<Footer selected="home" />
		</Layout>
	);
}

export function Head() {
	return <SEO />;
}
