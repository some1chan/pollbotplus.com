import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `PollBotPlus`,
		siteUrl: `https://pollbotplus.com`,
	},
	// More easily incorporate content into your pages through automatic
	// TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		`gatsby-plugin-pnpm`,
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				"icon": "src/images/icon.png"
			}
		},
		"gatsby-plugin-mdx",
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
			  defaults: {
				formats: [`auto`, `webp`],
				placeholder: `blurred`,
				quality: 50,
				breakpoints: [750, 1080, 1366, 1920],
				backgroundColor: `transparent`,
				tracedSVGOptions: {},
				blurredOptions: {},
				jpgOptions: {},
				pngOptions: {},
				webpOptions: {},
				avifOptions: {},
			  }
			}
		  },
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};

export default config;
