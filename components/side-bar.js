import App from "next/app";
import React from "react";

class SideBar extends App {
  constructor(props) {
    super(props);
    this.state = { windowWidth: null };
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  Fill = (width) => {
    if (width <= 530) {
      return (
        <ul className="sb-list">
          <li>
            <h3>
              <a href="/">
                <span className="ico">🏛️ </span>Home
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/blog">
                <span className="ico">📜 </span>Writings
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/books">
                <span className="ico">🔖 </span>Books
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a target="_blank" href="https://files.seththyer.com/pub/">
                <span className="ico">📂 </span>Files
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a target="_blank" href="https://radio.seththyer.com/">
                <span className="ico">📻 </span>Radio
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="mailto:seth@seththyer.com?subject=Sent%20From%20SethThyersPage">
                <span className="ico">📯 </span>Email
              </a>
            </h3>
          </li>
        </ul>
      );
    }
    return (
      <ul className="sb-list">
        <li>
          <h3>
            <a href="/">
              <span className="ico">🏛️ </span>Home
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="/blog">
              <span className="ico">📜 </span>Writings
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="/books">
              <span className="ico">🔖 </span>Books
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a target="_blank" href="https://files.seththyer.com/pub/">
              <span className="ico">📂 </span>Files
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a target="_blank" href="https://radio.seththyer.com/">
              <span className="ico">📻 </span>Radio
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="mailto:seth@seththyer.com?subject=Sent%20From%20SethThyersPage">
              <span className="ico">📯 </span>Email
            </a>
          </h3>
        </li>
        <li className="splitter" />
        <li>
          <h3>
            <a target="_blank" href="https://github.com/SethThyer">
              <img src="/images/git-icon.svg" className="svg-ico" />
              &nbsp;Github
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a target="_blank" href="https://twitter.com/Seth06098372">
              <img src="/images/twitter-icon.svg" className="svg-ico" />
              &nbsp;Twitter
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a
              target="_blank"
              href="https://open.spotify.com/user/qwr2j3sfc6quajm51dtz54sde?si=c91e27cd71b4497a&nd=1"
            >
              <img src="/images/spotify-icon.svg" className="svg-ico" />
              &nbsp;Spotify
            </a>
          </h3>
        </li>
      </ul>
    );
  };

  render() {
    const winX = this.state.windowWidth;
    return (
      <div className="side-bar">
        <div>{this.Fill(winX)}</div>
      </div>
    );
  }
}

export default SideBar;
