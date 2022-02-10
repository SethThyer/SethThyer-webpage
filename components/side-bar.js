import Image from "next/image";
import React, { useEffect } from "react";
import App from "next/app";

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
              <a href="blog">🏛️</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="blog">📜</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="books">🔖</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="mailto:main@seththyer.com?subject=Sent%20From%20SethThyersPage">
                📯
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
            <a href="mailto:main@seththyer.com?subject=Sent%20From%20SethThyersPage">
              📯 Email
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
