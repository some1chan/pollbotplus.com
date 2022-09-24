import { graphql, useStaticQuery } from "gatsby";

export function useSiteMetadata() {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					twitterUsername
					siteUrl
				}
			}
		}
	`);

	return data.site.siteMetadata as {
		title: string;
		description: string;
		twitterUsername: string;
		siteUrl: string;
	};
}
