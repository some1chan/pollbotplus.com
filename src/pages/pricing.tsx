import * as React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
	return (
		<Layout>
			<Header />
			<div className="width-wrapper p-wrapper">
				<h1></h1>
			</div>
			<Footer />
		</Layout>
	);
}

export function Head() {
	return <SEO />;
}
