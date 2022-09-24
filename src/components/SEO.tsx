import * as React from "react";
import { useSiteMetadata } from "../hooks/UseSiteMetadata";
import Icon from "../images/icon.png";

export default function SEO({
	title,
	description,
	pathname,
	children,
}: {
	title?: string;
	description?: string;
	pathname?: string;
	children?: JSX.Element;
}) {
	const {
		title: defaultTitle,
		description: defaultDescription,
		siteUrl,
		twitterUsername,
	} = useSiteMetadata();

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname || ``}`,
		twitterUsername,
	};

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
			<title>{seo.title}</title>
			<meta property="og:title" content={seo.title} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={seo.url} />
			<meta property="og:site_name" content="PollBotPlus" />
			<meta name="description" content={seo.description} />
			<meta property="description" content={seo.description} />
			<meta property="og:description" content={seo.description} />
			<meta
				property="og:keywords"
				content="poll bot, anonymous, time, Discord bot, Discord"
			/>
			<meta property="og:locale" content="en" />
			<meta property="og:image" content={Icon} />
			{children}
		</>
	);
}
