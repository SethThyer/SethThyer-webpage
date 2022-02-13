import Image from "next/image";

function MyApp() {
  return (
    <div>
      <h2>🇦🇺 About Me 🔥</h2>
      <div className="inline-l">
        <h3>
          <a href="/blog">📜 Writings</a>
        </h3>
        <h3>
          <a href="/books">🔖 Books</a>
        </h3>
        <h3>
          <a href="mailto:main@seththyer.com?subject=Sent%20From%20SethThyersPage">
            📯 Email
          </a>
        </h3>
      </div>
      <center>
        <p>
          C-lang Enjoyer 💾
          <br />
          Bitcoin Disowner 📉
          <br />
          Music Listener 🎺
          <br />
          Div Centerer 😎
          <br />
          Linux Avid 💻
        </p>
      </center>
      <h2>⛵ Where I Reside ⚓</h2>
      <center>
        <h3 className="inline-c">
          <a target="_blank" href="https://github.com/SethThyer">
            <Image src="/images/git-icon.svg" width="25rem" height="25rem" />
            &nbsp;Github
          </a>
        </h3>
        <h3 className="inline-c">
          <a target="_blank" href="https://twitter.com/Seth06098372">
            <Image
              src="/images/twitter-icon.svg"
              width="25rem"
              height="25rem"
            />
            &nbsp;Twitter
          </a>
        </h3>
        <h3 className="inline-c">
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
      </center>
      <h2>🌐 Some Cool Sites 📰</h2>
      <center className="gif">
        <a target="_blank" href="https://larbs.xyz">
          <Image
            alt="LARBS"
            src="https://larbs.xyz/pix/larbs.gif"
            width="88px"
            height="31px"
          />
        </a>
        <a target="_blank" href="https://yesterweb.org/no-to-web3/">
          <Image
            alt="NO WEB3"
            src="https://auzziejay.com/images/noweb32.gif"
            width="88px"
            height="31px"
          />
        </a>
        <a target="_blank" href="https://landchad.net/">
          <Image
            alt="Land Chad"
            src="https://landchad.net/pix/landchad.gif"
            width="88px"
            height="31px"
          />
        </a>
        <a target="_blank" href="https://search.melonking.net/">
          <Image
            alt="Daniel's Network"
            src="https://search.melonking.net/images/badges/network.gif"
            width="88px"
            height="31px"
          />
        </a>
        <a target="_blank" href="https://openbooks.neocities.org">
          <Image
            src="https://openbooks.neocities.org/img/88x31.gif"
            width="88px"
            height="31px"
          />
        </a>
        <a target="_blank" href="https://seththyer.com/">
          <Image src="/images/web-button-gif.gif" width="88px" height="31px" />
        </a>
      </center>
    </div>
  );
}

export default MyApp;
