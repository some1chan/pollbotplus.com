import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
					<meta name="theme-color" content="#1abc9c" />

					<meta
						property="og:title"
						content="PollBotPlus | Make Beautiful Polls on Discord."
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:url"
						content="https://pollbotplus.com/"
					/>
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
					<meta property="og:image" content="/logo.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
