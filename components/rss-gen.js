const RSS = require("rss");
const fs = require("fs");
const { forEach } = require('async');
const { forEachOf } = require('async');

let fileInfo = [];

const files = fs.readdirSync("../entries/descriptions");
for (let i=0; i < files.length; i++) {
  fileInfo.push(
    JSON.parse(fs.readFileSync("../entries/descriptions/" + files[i]))
  );
}

function sortOrder(a, b) {
  let vala = Number(a.date.split("/")[0]) +
    Number(a.date.split("/")[1]) * 100 +
    Number(a.date.split("/")[2]);
  let valb = Number(b.date.split("/")[0]) + 
    Number(b.date.split("/")[1]) * 100 + 
    Number(b.date.split("/")[2]);

  if (vala < valb) {
    return 1;
  } else return -1;
}
let sortedFiles = fileInfo.slice(0).sort(sortOrder);


let articleList = [];
for (const n in sortedFiles) {
  const urlLink=("https://seththyer.com" + sortedFiles[n].link)
  articleList.push({
    title: sortedFiles[n].title,
    description: sortedFiles[n].descript,
    url: urlLink,
  })
}


const blog = {
  title: "Articles from SethThyer",
  description: "Updates on articles uploaded to seththyer.com",
  author: "Seth S.Thyer",
  articles: articleList
}

const feed = new RSS({
  title: blog.title,
  description: blog.description,
  author: blog.author
});

for (const article of blog.articles) {
  feed.item({
    title: article.title,
    description: article.description,
  });
}


const xml = feed.xml({ indent: true });
fs.writeFileSync("../public/feed.xml", xml);
