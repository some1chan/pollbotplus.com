import "../styles/index.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function PollBotPlus({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>PollBotPlus | Make Beautiful Polls on Discord.</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
