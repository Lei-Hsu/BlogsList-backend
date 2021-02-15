const express = require("express");
const bodyparser = require("body-parser");
const knex = require("knex");
const cors = require("cors");

const getHomePage = require("./controllers/getHomePage");
const detail = require("./controllers/detail");
const createPost = require("./controllers/createPost");
const utility = require("./controllers/utility");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
});

const app = express();
//允許CORS
app.use(cors());
//把req資料轉成json
app.use(bodyparser.json());

//進到畫面 get
app.get("/", (req, res) => {
  getHomePage.handleGetHomePage(req, res, db);
});
//進到單筆畫面 get
app.get("/detail/:id", (req, res) => {
  detail.handleGetDetail(req, res, db);
});
//刪除 delete
app.delete("/detail/:id", (req, res) => {
  detail.handleDeleteDetail(req, res, db);
});
//新增 create post
app.post("/create", (req, res) => {
  createPost.handleCreatePost(req, res, db);
});
//增加like數量 put
app.put("/detail/:id", (req, res) => {
  utility.handleLike(req, res, db);
});
//修改文章put
app.put("/detail/:id/change", (req, res) => {
  utility.handleChange(req, res, db);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`port is ${port}`));
