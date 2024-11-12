// const con = require("../utils/db");

// const getAllArticles = (req, res) => {
//   let query = "SELECT * FROM article";
//   let articles = [];
//   con.query(query, (err, result) => {
//     if (err) throw err;
//     articles = result;
//     res.render("index", {
//       articles: articles,
//     });
//   });
// };

// const getArticlesBySlug = (req, res) => {
//   let query = `SELECT article.*, author.id AS author_id, author.name AS author_name
//                   FROM article
//                   JOIN author ON article.author_id = author.id
//                   WHERE article.slug="${req.params.slug}"`;
//   con.query(query, (err, result) => {
//     if (err) throw err;
//     article = result;
//     res.render("article", {
//       article: article,
//     });
//   });
// };

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
// });

// module.exports = {
//   getAllArticles,
//   getArticlesBySlug,
// };

const articleDbModel = require("../models/article");
const articleModel = new articleDbModel();

class articleController {
  constructor() {
    const articles = [];
  }

  async getAllArticles(req, res) {
    const articles = await articleModel.findAll();
    res.status(201).json({ articles: articles });
  }

  async getArticleBySlug(req, res) {
    const article = await articleModel.findOne(req.params.slug);
    res.status(201).json({ article: article });
  }
}

module.exports = articleController;
