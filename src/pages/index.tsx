import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout"
import Footer from "../components/Footer";
import { StaticImage } from "gatsby-plugin-image"
import * as Landing from "../styles/Landing.module.scss";
import Button from "../components/Button";
import Header from "../components/Header";


const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=804245390642642965&scope=bot&permissions=2416438336";

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div className={Landing["bg-wrapper-landing"]}>
          <Header selected="home" />
          <div className="width-wrapper p-wrapper">
            <div className={Landing["top-landing"]}>
              <div className={Landing["text-and-buttons"]}>
                <div>
                  <h2>Make Beautiful Polls on Discord.</h2>
                  <p>
                    Meet PollBotPlus, a Discord poll bot refined
                    for the power user, who care about how their
                    polls look.
                  </p>
                  <div className={Landing["buttons"]}>
                    <Button
                      type="primary"
                      label="Add to Server"
                      href={INVITE_URL}
                      target="_blank"
                    />
                    <div className={Landing["divider"]}></div>
                    <Button
                      type="secondary"
                      label="See Features"
                      // href="https://dsc.gg/pollbotplus-support"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="landing"></div>
          </div>
        </div>

        <div
          className={Landing["poll-gallery"] + " width-wrapper p-wrapper"}
          style={{ textAlign: "center" }}
        >
          <div className={Landing["image-container"]}>
            <div
              className={`${Landing["image"]} ${Landing["light-image"]}`}
            >
              <StaticImage
                src={"../images/PBP AnimesRealSlashCommand.png"}
                alt="A poll made by a user"
                width={445}
                height={452}
              />
            </div>
            <div
              className={`${Landing["image"]} ${Landing["dark-image"]}`}
            >
              <StaticImage
                src={"../images/PBP AnimesRealSlashCommand Dark.png"}
                alt="A poll made by a user"
                width={445}
                height={452}
              />
            </div>
          </div>
        </div>

        <div className={Landing["trusted-banner"]}>
          <div
            className={`${Landing["items"]} width-wrapper p-wrapper p2-wrapper`}
          >
            <h2>Trusted by 2,600+ servers.</h2>
            <ul>
              <li>
                <a
                  href="https://discord.gg/battlezone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src={"../images/guild-icons/guildicon1.png"}
                    alt="BattleZone.gg"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/cYMGA77"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src={"../images/guild-icons/guildicon2.png"}
                    alt="Game Dev Underground"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/XGtzRJCsBY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src={"../images/guild-icons/guildicon3.png"}
                    alt="Karuta's Kit"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/XEFmHcjppy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src={"../images/guild-icons/guildicon4.png"}
                    alt="Seasalt's Karuta Shore"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${Landing["elegance"]} width-wrapper p-wrapper p2-wrapper`}
        >
          <h2>Elegance through Power.</h2>
          <p>
            Using PollBotPlus’s powerful command system, users can
            design polls to their liking.
          </p>
        </div>
        <Footer selected="home" />
      </div>
    </Layout>
  )
}

export default IndexPage


export function Head() {
  return (
    <>
      <title>PollBotPlus | Make Beautiful Polls on Discord.</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </>
  )
}