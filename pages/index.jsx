import React, { Component } from "react";
import Helmet from "react-helmet";

import { config } from "config";
import PageLink from "../components/common/PageLink";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";

import splitImg from "./split2@2x.jpg";
import breakImg from "./break.png";
import chartImg from "./chart.png";


/*function Download(props) {
  if (OSName !== "MacOS") {
    return (
      <div className="row middle-xs download section">
        <div className="col-xs-12">
          <p className="download-headline">Download for macOS</p>
          <p className="version">v1.0.0-beta</p>
          <a href="#">
            <button>Download</button>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row middle-xs download section">
        <div className="col-xs-12">
          <p className="download-headline">
            Available only for macOS right now
          </p>
          <p className="version">v1.0.0-beta</p>
          <a href="#">
            <button>Download</button>
          </a>
        </div>
      </div>
    );
  }
}*/

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle}`}
          meta={[
            { name: "description", content: "A Beautiful Focus Timer" },
            { name: "keywords", content: "pomodoro technique, pomodoro mac app, focus app, fohkuhs app, get shit done app" }
          ]}
        />
        <Hero tagline="A Beautiful Focus Timer" />
        <div className="pomo-hero-image-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <img src={splitImg} alt="" className="pomo-hero-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="container container-fluid">
            <div className="row middle-xs download section">
              <div className="col-xs-12">
                {/*<p className="download-headline">Download for macOS</p>*/}
                <a href="http://download.fohkuhs.com">
                  <button>Download for macOS</button>
                </a>
                <p className="version">v1.0.3</p>                
              </div>
            </div>
            <div className="row productive section">
              <div className="col-xs-12 col-sm-6 col-lg-4 col-lg-offset-2 padding-xs">
                <p>Increase Your Productivity</p>
                <p className="smaller">
                  <span className="logo">
                    <span className="bold">/foh</span>
                    -k
                    <span className="italic">uh </span>
                    s/
                  </span>
                  {" "}
                  (focus) uses concepts from the
                  {" "}
                  <br />
                  Pomodoro Technique
                  {" "}
                  <span className="productive-copy-symbol">©</span>
                </p>
                <a
                  href="https://cirillocompany.de/pages/pomodoro-technique"
                  target="_blank"
                >
                  Learn More
                </a>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4 padding-xs">
                <p>Easy to use</p>
                <p className="smaller">Focus for a set amount of time</p>
                <p className="smaller">Take a break</p>
                <p className="smaller">Repeat</p>
              </div>
            </div>

            <div className="row middle-xs break-screen section">
              <div className="col-xs-12 col-sm-4 padding-xs">
                <p>Beautiful Break Screens</p>
                <p>From Unsplash</p>
              </div>
              <div className="col-xs-12 col-sm-7 col-sm-offset-1">
                <img src={breakImg} alt="" />
              </div>
            </div>

            <div className="row middle-xs chart-screen section">
              <div className="col-xs-12 col-sm-7">
                <img src={chartImg} alt="" />
              </div>
              <div className="col-xs-12 col-sm-4 col-sm-offset-1 padding-xs first-xs last-sm">
                <p>Stats To Keep You Motivated</p>
                <p className="smaller">(Plus they look cool)</p>
              </div>
            </div>

            <div className="row middle-xs customize section">
              <div className="col-xs-12">
                <p>Customize ALL THE THINGS</p>
              </div>
              <div className="col-xs-12 col-sm-5 col-sm-offset-1">
                <p className="smaller">Change theme (light/dark)</p>
                <p className="smaller">Set session length</p>
                <p className="smaller">Set break length</p>
                <p className="smaller">Set sessions until longer break</p>
                <p className="smaller">
                  Set goal sessions (10 is a good starting goal)
                </p>
              </div>
              <div className="col-xs-12 col-sm-5">
                <p className="smaller">Break screen on/off</p>
                <p className="smaller">Launch at startup</p>
                <p className="smaller">Show timer in menu bar or not</p>
                <p className="smaller">Auto start next session or not</p>
                <p className="smaller">Ticking sound on/off</p>
              </div>
            </div>

            {/*<div className="row middle-xs soon section">
              <div className="col-xs-12">
                <p>Launching Soon...</p>
              </div>
            </div>*/}

            <div className="row middle-xs download section">
              <div className="col-xs-12">
                {/*<p className="download-headline">Download for macOS</p>*/}
                <a href="http://download.fohkuhs.com">
                  <button>Download for macOS</button>
                </a>
                <p className="version">v1.0.3</p>                
              </div>
            </div>

          </div>
        </div>

        <Footer />

      </div>
    ); //END OF WRAPPER DIV
  }
}

export default IndexPage;
