const express = require("express");
const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("Hello Worldddd!");
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing the post ID: ${postId} on ${subreddit} subreddit</h1>`);
  console.log(req.params);
});

app.post("/cats", (req, res) => {
  res.send("POST CATS");
});

app.get("/cats", (req, res) => {
  res.send("MEOWWWWWWWWWW");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.get("*", (req, res) => {
  res.send("Error!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
