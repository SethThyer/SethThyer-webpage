import React from "react";
import App from "next/app";
import Head from "next/head";
import SideBar from "/components/side-bar.js";

import "../index.css";

class MyApp extends App {
  componentDidMount() {
    document.body.id = "back";
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <SideBar />
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
            rel="stylesheet"
          />
          <title>LocalHost</title>
        </Head>
        <div className="abs-center">
          <h1 className="title">Seth Thyer's Page</h1>
          <div className="main-box">
            <Component {...pageProps} />
          </div>
        </div>
      </>
    );
  }
}

export default MyApp;
