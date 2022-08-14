import ReactMarkdown from "react-markdown";

const markdown = `
# Terms of Service

By using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to attempt to extract the source code of the app. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to some1chan.

some1chan accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.

We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you.

## Changes to Terms and Conditions

I may update this Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Terms and Conditions on this page.

This policy is effective as of 30 August 2022 and was last updated on 30 August 2022. 

## Contact Us

If you have any questions or suggestions about these terms, do not hesitate to join the [Discord support server](https://discord.gg/QrRrnSDjHw), and message me at some1chan#0035.
`;

const TermsOfService = () => {
	return (
		<div className="width-wrapper p-wrapper">
			<ReactMarkdown children={markdown} />
			<br />
			<br />
		</div>
	);
};

export default TermsOfService;