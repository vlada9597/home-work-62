import http from "http";

const urls = [
  "http://localhost:3000/",
  "http://localhost:3000/users",
  "http://localhost:3000/users/1",
  "http://localhost:3000/articles",
  "http://localhost:3000/articles/1"
];

urls.forEach(url => {
  http.get(url, res => {
    console.log(`${url} → ${res.statusCode} ${res.statusMessage}`);
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => {
      console.log(`Response length: ${data.length} characters\n`);
    });
  }).on("error", err => {
    console.log(`${url} → ERROR: ${err.message}\n`);
  });
});
