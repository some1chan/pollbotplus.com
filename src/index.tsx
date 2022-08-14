import "./css/index.scss";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const App = () => {
	useEffect(() => {
		const browserDefaultDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		if (
			(browserDefaultDark && !localStorage.getItem("dark")) ||
			(!browserDefaultDark && localStorage.getItem("dark"))
		) {
			// document.body.classList.add("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home />
							<Footer selected="home" />
						</>
					}
				/>
				<Route
					path="/terms"
					element={
						<>
							<Header />
							<TermsOfService />
							<Footer />
						</>
					}
				/>
				<Route
					path="/privacy"
					element={
						<>
							<Header />
							<PrivacyPolicy />
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

createRoot(document.getElementById("root")!).render(<App />);
