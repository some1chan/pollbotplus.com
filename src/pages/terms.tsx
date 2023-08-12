import * as React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const markdown = `
# Terms of Service

By using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to attempt to extract the source code of the app. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to PollBotPlus.

PollBotPlus accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.

We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you.

## Changes to Terms and Conditions

We may update this Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.

This policy is effective as of 27 September 2022 and was last updated on 12 August 2023. 

## Usage of Your Brand Features

By using PollBotPlus, you grant the developers all necessary rights to use your brand features (such as your [server]'s name and logo) for any reason, including, but not limited to, marketing purposes.

## Contact Us

If you have any questions or suggestions about the terms or privacy policy, do not hesitate to join the [Discord support server](https://pollbotplus.com/support), and ask your question in the proper channels or by DMing an admin. Don't send a friend request to the admins, they will likely ignore it!`;

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
