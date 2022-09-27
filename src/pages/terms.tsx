import * as React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const markdown = `
# Terms of Service

By using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to attempt to extract the source code of the app. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to some1chan.

some1chan accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.

We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you.

## Changes to Terms and Conditions

I may update this Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Terms and Conditions on this page.

This policy is effective as of 27 September 2022 and was last updated on 27 September 2022. 

## Contact Us

If you have any questions or suggestions about the privacy policy, do not hesitate to join the [Discord support server](https://discord.gg/r2YMTMydSF), and message me at some1chan#0035. Please don't send me a friend request, I will likely ignore it!`;

export default function TermsOfService() {
	return (
		<Layout>
			<Header />
			<div className="width-wrapper p-wrapper t-wrapper">
				<ReactMarkdown children={markdown} />
			</div>
			<Footer />
		</Layout>
	);
}

export function Head() {
	return <SEO title="Terms of Service | PollBotPlus" />;
}
