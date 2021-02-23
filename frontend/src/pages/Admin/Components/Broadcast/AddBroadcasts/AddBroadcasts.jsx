import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./add-broadcasts.module.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Profile } from "../../Profile";
import { Dashboard } from "../../Dashboard";
import { Contact } from "../../Contact";
import { About } from "../../About";
import { Faq } from "../../Faq";
import { Setting } from "../../Setting";
import { Invite } from "../../Setting/Invite";
import { Manage } from "../../Setting/Manage";
import style from "../../../admin.module.scss";
import { Button2 } from "../../../../../components/util/button/button";

export function AddBroadcasts() {
  const [tab, setTab] = useState(2);
  return (
    <div>
      <div style={{ minHeight: "100vh" }}>
        <div className={style["dashing"]}>
          <div className={style["left"]}>
            <div className={style["welcome-section"]} onClick={() => setTab(0)}>
              <img
                src="./images/admin.png"
                className={style["img-admin"]}
                alt="admin_img"
              />
              <h1 className={style["h1"]}>Welcome Admin!</h1>
            </div>
            <div
              className={
                tab === 1 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(1)}
            >
              <DashboardIcon style={{ fontSize: 23.32 }} />
              <div className={style["span"]}>Dashboard</div>
            </div>
            <div
              className={
                tab === 2 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(2)}
            >
              <i className="fas fa-bullhorn fa-fw fa-lg" aria-hidden="true"></i>
              <div className={style["span"]}>Broadcasts</div>
            </div>
            <div
              className={
                tab === 3 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(3)}
            >
              <i
                className="fas fa-user-circle fa-fw fa-lg"
                aria-hidden="true"
              ></i>
              <div className={style["span"]}>Contact Us</div>
            </div>
            <div
              className={
                tab === 4 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(4)}
            >
              <i className="fas fa-users fa-fw fa-lg" aria-hidden="true"></i>
              <div className={style["span"]}>About Us</div>
            </div>
            <div
              className={
                tab === 5 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(5)}
            >
              <i className="fas fa-question fa-fw fa-lg" aria-hidden="true"></i>
              <div className={style["span"]}>Manage FAQs</div>
            </div>
            <div
              className={
                tab === 6 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(6)}
            >
              <i className="fas fa-cog fa-fw fa-lg" aria-hidden="true"></i>
              <div className={style["span"]}>Settings</div>
            </div>
          </div>
          <div className={style["right"]}>
            {tab === 0 ? (
              <Profile />
            ) : tab === 1 ? (
              <Dashboard setTab={setTab} />
            ) : tab === 2 ? (
              <div className={styles["editor"]}>
                <div className={styles["motive"]}>
                  <h1 className={styles["heading"]}>ADD BROADCAST</h1>
                  <div className={styles["dash"]}></div>
                </div>
                <div className={styles["header"]}>
                  <p className={styles["headingg"]}>Broadcast heading</p>
                  <input
                    type="text"
                    className={styles["inputs"]}
                    placeholder="Type here..."
                  ></input>
                </div>
                <div>
                  <p className={styles["headingg"]}>
                    Enter the Broadcast content here...
                  </p>
                  <SunEditor
                    lang="en"
                    placeholder="Please type here..."
                    height="500px"
                    className={styles["edit"]}
                  />
                  <div className={styles["submit-btn"]}>
                    <Button2
                      className={styles["submit-btn-text"]}
                      label="Submit"
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            ) : tab === 3 ? (
              <Contact />
            ) : tab === 4 ? (
              <About />
            ) : tab === 5 ? (
              <Faq />
            ) : tab === 6 ? (
              <Setting setTab={setTab} />
            ) : tab === 7 ? (
              <Invite />
            ) : tab === 8 ? (
              <Manage />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}