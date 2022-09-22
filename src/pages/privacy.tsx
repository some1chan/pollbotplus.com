import * as React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const markdown = `
# Privacy Policy

This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.

If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.

The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at [pollbotplus.com/terms](/terms) unless otherwise defined in this Privacy Policy.

## Information We Collect and Use

For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information.

The bot collects information including, but not limited to: 

- **User IDs** - your account's unique identifier in Discord.
- **Channel IDs** - a channel which a poll's been sent to.
- **Guild IDs** - your server's unique identifier in Discord.

The bot also logs the following information in case of, but not limited to, errors, user experience improvements, support tickets, and bot growth analytics:

- **User tags** (ex. Username#0001)
- **Guild names and member counts**
- **Commands ran** (ex. context menus, slash commands, message commands, buttons, select menus, etc.) ran by a user, including but not limited to:
	- The questions and choices used
	- The date and time it's been used

We would like to inform you that whenever you use the website, in a case of an error in the app we collect data and information (through third-party products) called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. 

## Cookies

Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.

This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

## Service Providers

We may employ third-party companies and individuals due to the following reasons:

*   To facilitate our Service;
*   To provide the Service on our behalf;
*   To perform Service-related services; or
*   To assist us in analyzing how our Service is used.

We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.

## Security

We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.

## Links to Other Sites

This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

## Changes to Privacy Policy

We may update this Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.

This policy is effective as of 30 August 2022 and was last updated on 30 August 2022. 

## Contact Us

If you have any questions or suggestions about the privacy policy, do not hesitate to join the [Discord support server](https://discord.gg/QrRrnSDjHw), and message me at some1chan#0035. Please don't send me a friend request, I will likely ignore it!
`;

export default function PrivacyPolicy() {
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
	return <SEO />;
}
