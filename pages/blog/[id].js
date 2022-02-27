import { useRouter } from "next/router";
import React from "react";
const fs = require("fs");

function getFile(filePath) {
  const path = "entries/" + filePath + ".html";
  if (fs.existsSync(path)) return fs.readFileSync(path, "utf-8");
  else return false;
}

export async function getServerSideProps(context) {
  const file = getFile(context.params.id);

  if (file == false) {
    return {
      notFound: true,
    };
  }
  return {
    props: { page: file },
  };
}

function BlogEntry(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.page }}></div>;
}

export default BlogEntry;
