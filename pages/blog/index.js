const fs = require("fs");

export async function getServerSideProps() {
  let fileInfo = [];

  const files = fs.readdirSync("entries/descriptions");
  for (let i = 0; i < files.length; i++) {
    fileInfo.push(
      JSON.parse(fs.readFileSync("entries/descriptions/" + files[i]))
    );
  }

  return {
    props: { files: fileInfo },
  };
}

function BlogHome(props) {
  const body = () => {
    let ret = "";
    props.files.forEach(function (file) {
      ret =
        ret +
        `<center>
          <h4>
            <a href='${file.link}' class='wrap'>${file.title}</a>
          </h4>
          <p class='para sub'>${file.date} <br/> ${file.descript}</p>
        </center> <br/>`;
    });
    return ret;
  };

  return <div dangerouslySetInnerHTML={{ __html: body() }}></div>;
}

export default BlogHome;
