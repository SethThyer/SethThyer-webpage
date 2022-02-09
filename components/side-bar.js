import Image from "next/image";

function SideBar() {
  const ret = (
    <ul className="sb-list">
      <li>
        <h3>
          <a href="blog">🏛️ Home</a>
        </h3>
      </li>
      <li>
        <h3>
          <a href="blog">📜 Writings</a>
        </h3>
      </li>
      <li>
        <h3>
          <a href="books">🔖 Books</a>
        </h3>
      </li>
      <li>
        <h3>
          <a href="mailto:seththyer23@gmail.com?subject=Sent%20From%20SethThyersPage">
            📯 Email
          </a>
        </h3>
      </li>
    </ul>
  );

  const width = 9999;
  if (width <= 1330) {
    const ret = (
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
            <a href="mailto:seththyer23@gmail.com?subject=Sent%20From%20SethThyersPage">
              📯
            </a>
          </h3>
        </li>
      </ul>
    );
  }

  return (
    <div className="side-bar">
      <div>{ret}</div>
    </div>
  );
}

export default SideBar;
