import "./css/index.scss";

import ReactDOM from "react-dom";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";

import EmbedPollImgUrl from "./img/embed-crop-tiny.png";

const App = () => {
	console.log(import.meta.env);
	const INVITE_URL =
		"https://discord.com/api/oauth2/authorize?client_id=804245390642642965&scope=applications.commands+bot&permissions=2416274496";
	const SUPPORT_SERVER = "https://discord.gg/krZPZDD9b7";
	return (
		<div className="dark">
			<div className="g-wrapper">
				<Header />
				<div className="landing">
					<div className="text-and-buttons">
						<div>
							<h2>Create quick, easy, and beautiful polls.</h2>
							<div className="vertical-divider"></div>
							<Button
								type="primary"
								label="Add to Server"
								href={INVITE_URL}
								target="_blank"
							/>
							<div className="divider"></div>
							<Button
								type="secondary"
								label="Support Server"
								href={SUPPORT_SERVER}
								target="_blank"
							/>
						</div>
					</div>
					<div className="image-container">
						<img
							src={EmbedPollImgUrl}
							alt="A poll made by a user"
							className="image"
							width="462"
							height="342"
						></img>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
