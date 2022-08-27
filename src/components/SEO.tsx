import * as React from "react";
import Icon from "../images/icon.png";

export default function SEO() {
	return (
		<>
			<link
				rel="shortcut icon"
				type="image/svg+xml"
				href="/favicon.svg"
			/>
			<meta name="theme-color" content="#1abc9c" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<title>PollBotPlus | Make Beautiful Polls on Discord.</title>
			<meta
				property="og:title"
				content="PollBotPlus | Make Beautiful Polls on Discord."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://pollbotplus.com/" />
			<meta property="og:site_name" content="PollBotPlus" />
			<meta
				property="description"
				content="Meet PollBotPlus — a Discord poll bot refined for the power user, who cares about how their polls look."
			/>
			<meta
				property="og:description"
				content="Meet PollBotPlus — a Discord poll bot refined for the power user, who cares about how their polls look."
			/>
			<meta
				property="og:keywords"
				content="poll bot, anonymous, time, Discord bot, Discord"
			/>
			<meta property="og:locale" content="en" />
			<meta property="og:image" content={Icon} />
		</>
	);
}
