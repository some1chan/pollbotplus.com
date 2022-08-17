import Image from "next/image";

import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Landing from "../styles/Landing.module.scss";

import AnimesRealImg from "../public/PBP AnimesRealSlashCommand.png";
import AnimesRealDarkImg from "../public/PBP AnimesRealSlashCommand Dark.png";
import GuildIcon1 from "../public/guild-icons/guildicon1.png";
import GuildIcon2 from "../public/guild-icons/guildicon2.png";
import GuildIcon3 from "../public/guild-icons/guildicon3.png";
import GuildIcon4 from "../public/guild-icons/guildicon4.png";

const Home = () => {
	const INVITE_URL =
		"https://discord.com/oauth2/authorize?client_id=804245390642642965&scope=bot&permissions=2416438336";

	return (
		<div>
			<div className={Landing["bg-wrapper-landing"]}>
				<Header selected="home" />
				<div className="width-wrapper p-wrapper">
					<div className={Landing["top-landing"]}>
						<div className={Landing["text-and-buttons"]}>
							<div>
								<h2>Make Beautiful Polls on Discord.</h2>
								<p>
									Meet PollBotPlus, a Discord poll bot refined
									for the power user, who care about how their
									polls look.
								</p>
								<div className={Landing["buttons"]}>
									<Button
										type="primary"
										label="Add to Server"
										href={INVITE_URL}
										target="_blank"
									/>
									<div className={Landing["divider"]}></div>
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
					<div className="landing"></div>
				</div>
			</div>

			<div
				className={Landing["poll-gallery"] + " width-wrapper p-wrapper"}
				style={{ textAlign: "center" }}
			>
				<div className={Landing["image-container"]}>
					<div
						className={`${Landing["image"]} ${Landing["light-image"]}`}
					>
						<Image
							src={AnimesRealImg}
							alt="A poll made by a user"
							width="445"
							height="452"
						/>
					</div>
					<div
						className={`${Landing["image"]} ${Landing["dark-image"]}`}
					>
						<Image
							src={AnimesRealDarkImg}
							alt="A poll made by a user"
							width="445"
							height="452"
						/>
					</div>
				</div>
			</div>

			<div className={Landing["trusted-banner"]}>
				<div
					className={`${Landing["items"]} width-wrapper p-wrapper p2-wrapper`}
				>
					<h2>Trusted by 2,600+ servers.</h2>
					<ul>
						<li>
							<a
								href="https://discord.gg/battlezone"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image src={GuildIcon1} alt="BattleZone.gg" />
							</a>
						</li>
						<li>
							<a
								href="https://discord.gg/cYMGA77"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={GuildIcon2}
									alt="Game Dev Underground"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://discord.gg/XGtzRJCsBY"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image src={GuildIcon3} alt="Karuta's Kit" />
							</a>
						</li>
						<li>
							<a
								href="https://discord.gg/XEFmHcjppy"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={GuildIcon4}
									alt="Seasalt's Karuta Shore"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div
				className={`${Landing["elegance"]} width-wrapper p-wrapper p2-wrapper`}
			>
				<h2>Elegance through Power.</h2>
				<p>
					Using PollBotPlus’s powerful command system, users can
					design polls to their liking.
				</p>
			</div>
			<Footer selected="home" />
		</div>
	);
};

export default Home;