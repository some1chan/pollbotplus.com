import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

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

const INVITE_URL =
	"https://discord.com/oauth2/authorize?client_id=804245390642642965&scope=bot&permissions=2416438336";

export default function IndexPage() {
	const gatsbyRepoData = useStaticQuery(graphql`
		query {
			topgg {
				serverCount
			}
			abstractImage: file(relativePath: { eq: "abstract-light.png" }) {
				childImageSharp {
					gatsbyImageData(formats: [AUTO, WEBP, AVIF])
				}
			}
		}
	`);
	const image = getImage(gatsbyRepoData.abstractImage);

	// Use like this:
	const bgImage = convertToBgImage(image);

	return (
		<Layout>
			{/* <div className={Landing.bgWrapperLanding}> */}
			<BackgroundImage {...bgImage} preserveStackingContext>
				<Header selected="home" />
				<div className="width-wrapper p-wrapper">
					<div className={Landing.topLanding}>
						<div className={Landing.textAndButtons}>
							<div>
								<h2>Make Beautiful Polls on Discord.</h2>
								<p>
									Meet PollBotPlus, a Discord poll bot refined
									for the power user, who cares about how
									their polls look.
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
										href="#features"
										target="_self"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BackgroundImage>
			{/* </div> */}

			<div
				className={`${Landing.pollGallery} width-wrapper p-wrapper`}
				style={{ textAlign: "center" }}
			>
				<div className={Landing.imageContainer}>
					<div className={`${Landing.image} ${Landing.lightImage}`}>
						<StaticImage
							src={"../images/PBP AnimesReal.png"}
							alt="Poll with the question 'When should we do movie night?' with 7 PM, 8 PM, and 9 PM as options"
							formats={["png"]}
							loading="eager"
							quality={90}
						/>
					</div>
					<div className={`${Landing.image} ${Landing.darkImage}`}>
						<StaticImage
							src={"../images/PBP AnimesReal Dark.png"}
							alt="Poll with the question 'When should we do movie night?' with 7 PM, 8 PM, and 9 PM as options"
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
								(gatsbyRepoData?.topgg?.serverCount ?? 2800) /
									100
							) * 100
						).toLocaleString()}
						+ servers.
					</h2>
					<ul>
						<li>
							<a href="https://www.gamedev.tv/" target="_blank">
								<StaticImage
									src={"../images/guild-icons/gamedevtv.svg"}
									alt="GameDev.tv"
									quality={100}
								/>
							</a>
						</li>
						<li>
							<a
								href="https://discord.gg/cYMGA77"
								target="_blank"
							>
								<StaticImage
									src={"../images/guild-icons/gdu.png"}
									alt="Game Dev Underground"
									quality={100}
								/>
							</a>
						</li>
						<li>
							<a
								href="https://discord.gg/karutaskit"
								target="_blank"
							>
								<StaticImage
									src={"../images/guild-icons/karutaskit.gif"}
									alt="Karuta's Kit"
									quality={90}
								/>
							</a>
						</li>
						<li>
							<a
								href="https://discord.gg/seasalt"
								target="_blank"
							>
								<StaticImage
									src={"../images/guild-icons/seasalt.png"}
									alt="Seasalt's Karuta Shore"
									quality={90}
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div id="features" className={`${Landing.infoGroup} p-wrapper`}>
				<div
					className={`${Landing.elegance} ${Landing.landingElement}`}
				>
					<div className={Landing.info}>
						<h2>Elegance through Power.</h2>
						<p>
							Using PollBotPlus’s powerful command system, users
							can design polls to their liking.
						</p>
						<ul>
							<li>
								<User />
								Limit users to vote for one choice, or allow
								voting for multiple
							</li>
							<li>
								<Clock />
								Make timed polls, which lets a poll
								automatically close itself
							</li>
							<li>
								<Tool />
								Change when results are shown; always or when
								polls end
							</li>
							<li>
								<EyeOff />
								Anonymous polls will hide which users voted for
								what choice
							</li>
							<li>
								<Lock />
								Semi-anonymous polls only let some users view
								who voted for what choice
							</li>
						</ul>
					</div>
					<div className={`${Landing.imageContainer}`}>
						<div
							className={`${Landing.image} ${Landing.lightImage}`}
						>
							<StaticImage
								src={"../images/PBP MovieNight.png"}
								alt="Poll with the question 'When should we do movie night?' with 7 PM, 8 PM, and 9 PM as options"
								formats={["png"]}
								quality={90}
							/>
						</div>
						<div
							className={`${Landing.image} ${Landing.darkImage}`}
						>
							<StaticImage
								src={"../images/PBP MovieNight Dark.png"}
								alt="Poll with the question 'When should we do movie night?' with 7 PM, 8 PM, and 9 PM as options"
								formats={["png"]}
								quality={90}
							/>
						</div>
					</div>
				</div>
				<div
					className={`${Landing.simplicity} ${Landing.landingElement} ${Landing.lineDivider}`}
				>
					<div className={`${Landing.info}`}>
						<h2>...or through simplicity...</h2>
						<p>Ask a quick question with /poll-simple.</p>
						<div
							className={`${Landing.image} ${Landing.lightImage}`}
						>
							<StaticImage
								src={"../images/PBP Pancakes.png"}
								alt="Simple poll with the question 'Do you like pancakes?' with a thumbs up, thumbs down, and a shrug reaction"
								formats={["png"]}
								objectFit="contain"
								objectPosition="bottom"
								quality={90}
							/>
						</div>
						<div
							className={`${Landing.image} ${Landing.darkImage}`}
						>
							<StaticImage
								src={"../images/PBP Pancakes Dark.png"}
								alt="Simple poll with the question 'Do you like pancakes?' with a thumbs up, thumbs down, and a shrug reaction"
								formats={["png"]}
								objectFit="contain"
								objectPosition="bottom"
								quality={90}
							/>
						</div>
					</div>
					<div
						className={`${Landing.imageContainer} ${Landing.uncompressedImage}`}
					>
						<div
							className={`${Landing.image} ${Landing.lightImage}`}
						>
							<StaticImage
								src={"../images/PBP CatsOrDogs.png"}
								alt="Simple poll with the question 'Cats or dogs?' with a cat and dog reaction"
								formats={["png"]}
								objectPosition="bottom"
								quality={90}
							/>
						</div>
						<div
							className={`${Landing.image} ${Landing.darkImage}`}
						>
							<StaticImage
								src={"../images/PBP CatsOrDogs Dark.png"}
								alt="Simple poll with the question 'Cats or dogs?' with a cat and dog reaction"
								formats={["png"]}
								objectPosition="bottom"
								quality={90}
							/>
						</div>
					</div>{" "}
					<div
						className={`${Landing.imageContainer} ${Landing.compressedImage}`}
					>
						<div
							className={`${Landing.image} ${Landing.lightImage}`}
						>
							<StaticImage
								src={"../images/PBP CatsOrDogs Compressed.png"}
								alt="Simple poll with the question 'Cats or dogs?' with a cat and dog reaction"
								formats={["png"]}
								objectPosition="bottom"
								quality={90}
							/>
						</div>
						<div
							className={`${Landing.image} ${Landing.darkImage}`}
						>
							<StaticImage
								src={
									"../images/PBP CatsOrDogs Dark Compressed.png"
								}
								alt="Simple poll with the question 'Cats or dogs?' with a cat and dog reaction"
								formats={["png"]}
								objectPosition="bottom"
								quality={90}
							/>
						</div>
					</div>
				</div>
				<div
					className={`${Landing.invisibility} ${Landing.landingElement} ${Landing.lineDivider}`}
				>
					<div className={Landing.info}>
						<h2>...or invisibility.</h2>
						<p>
							Have PollBotPlus add reactions to your messages!
							Conveniently add letter options, number options, or
							the emojis that are in your message.
						</p>
						<p>
							Right-click, or tap and hold a message.
							<br />
							Then, select Apps &gt; Add Reactions.
						</p>
					</div>
					<div className={Landing.imageContainer}>
						<div
							className={`${Landing.image} ${Landing.lightImage}`}
						>
							<StaticImage
								src={"../images/PBP Invis.png"}
								alt="Discord user asking 'What's your favorite fruit?' with various fruits as reactions"
								formats={["png"]}
								objectPosition="bottom"
								quality={90}
							/>
						</div>
						<div
							className={`${Landing.image} ${Landing.darkImage}`}
						>
							<StaticImage
								src={"../images/PBP Invis Dark.png"}
								alt="Discord user asking 'What's your favorite fruit?' with various fruits as reactions"
								formats={["png"]}
								objectPosition="bottom"
								quality={90}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
}

export function Head() {
	return <SEO />;
}
