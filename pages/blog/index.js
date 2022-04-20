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

    function sortOrder(a, b) {
      let vala = Number(a.date.split("/")[0]) +
        Number(a.date.split("/")[1]) * 100 +
        Number(a.date.split("/")[2]);
      let valb = Number(b.date.split("/")[0]) + 
        Number(b.date.split("/")[1]) * 100 + 
        Number(b.date.split("/")[2]);
      console.log(a.title + " " + vala + "   " + b.title + " " + valb)

      if (vala < valb) {
        return 1;
      } else return -1;
    }
    let sortedFiles = props.files.slice(0).sort(sortOrder);

    sortedFiles.forEach(function (file) {
      ret =
        ret +
        `<a href='${file.link}' class='wrap'><center><div class="entry-index">
          <h4 >
            ${file.title}
          </h4>
          <p class='para sub'>${file.date} <br/> ${file.descript}</p>
        </div></center></a><br/>`;
    });
    return ret;
  };

  return <div dangerouslySetInnerHTML={{ __html: body() }}></div>;
}

export default BlogHome;
