import Image from "next/image";
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
              <a href="/">🏛️Home</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/blog">📜Blog</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="/books">🔖Books</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="mailto:main@seththyer.com?subject=Sent%20From%20SethThyersPage">
                📯Email
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
            <a href="/">🏛️ Home</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="/blog">📜 Writings</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="/books">🔖 Books</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="mailto:seth@seththyer.com?subject=Sent%20From%20SethThyersPage">
              📯 Email
            </a>
          </h3>
        </li>
        <li className="splitter" />
        <li>
          <h3>
            <a target="_blank" href="https://github.com/SethThyer">
              <Image src="/images/git-icon.svg" width="25rem" height="25rem" />
              &nbsp;Github
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a target="_blank" href="https://twitter.com/Seth06098372">
              <Image
                src="/images/twitter-icon.svg"
                width="25rem"
                height="25rem"
              />
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
              <Image
                src="/images/spotify-icon.svg"
                width="25rem"
                height="25rem"
              />
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
