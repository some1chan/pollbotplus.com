import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

// @ts-ignore
import * as Pricing from "../styles/Pricing.module.scss";

const INVITE_URL =
	"https://discord.com/oauth2/authorize?client_id=804245390642642965&scope=bot&permissions=2416438336";

export default function PricingPage() {
	// const gatsbyRepoData = useStaticQuery(graphql`
	// 	query {
	// 		abstractImage: file(relativePath: { eq: "abstract-light.png" }) {
	// 			childImageSharp {
	// 				gatsbyImageData(formats: [AUTO, WEBP, AVIF])
	// 			}
	// 		}
	// 	}
	// `);
	// const image = getImage(gatsbyRepoData.abstractImage);
	// const bgImage = convertToBgImage(image);

	return (
		<Layout>
			<div className={Pricing.bgWrapperLanding}>
				{/* <BackgroundImage {...bgImage} preserveStackingContext> */}
				<Header selected="pricing" />
				<div
					className={`width-wrapper p-wrapper`}
					style={{ paddingBottom: "8rem" }}
				>
					<div className={`${Pricing.topLanding}`}>
						<h2>Refine your polls on Discord.</h2>
						<p>Work with the full potential of PollBotPlus.</p>
					</div>
					<div className={Pricing.cardContainer}>
						<div className={Pricing.card}>
							<h3>Free</h3>
							<p>
								The basic core of PollBotPlus, for smaller
								communities.
							</p>
							<p className={Pricing.price}>
								<span>$0 </span>
								/month
							</p>
							<strong>Includes the following:</strong>
							<ul>
								<li>Anonymous polls</li>
								<li>Buttons or reactions</li>
								<li>Semi-anonymous polls</li>
								<li>Timed polls up to 7 days</li>
								<li>Single-vote polls</li>
							</ul>
							<div className={Pricing.spacing} />
							<Button
								type="secondary"
								label="Add to Server"
								href={INVITE_URL}
								target="_blank"
							/>
						</div>
						<div className={`${Pricing.card} ${Pricing.glow}`}>
							<h3>Pro</h3>
							<p>
								Access more powerful options and higher limits.
							</p>
							<p className={Pricing.price}>
								<span>$? </span>
								/month
							</p>
							<strong>All Free features, plus...</strong>
							<ul>
								<li>List coming soon!</li>
							</ul>
							<div className={Pricing.spacing} />
							<Button
								type="primary-disabled"
								label="Coming Soon!"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* </BackgroundImage> */}
			<Footer />
		</Layout>
	);
}

export function Head() {
	return <SEO title="Pricing | PollBotPlus" />;
}
