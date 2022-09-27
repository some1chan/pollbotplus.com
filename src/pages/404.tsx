import * as React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Link } from "gatsby";

// @ts-ignore
import * as PageNotFound from "../styles/PageNotFound.module.scss";

export default function PrivacyPolicy() {
	return (
		<Layout>
			<Header />
			<div
				className={`width-wrapper p-wrapper ${PageNotFound.pageNotFound}`}
			>
				<h1>Page Not Found</h1>
				<p>
					Please tell an admin at the{" "}
					<a href="https://pollbotplus.com/support">
						support server
					</a>{" "}
					if you somehow come across this unintentionally.
				</p>
				<Link to="/">Go Back Home</Link>
			</div>
			<Footer />
		</Layout>
	);
}

export function Head() {
	return (
		<>
			<SEO />
		</>
	);
}
