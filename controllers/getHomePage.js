const handleGetHomePage = (req, res, db) => {
  //從資料庫找出全部資料回傳data
  db.select("*")
    .from("blogs")
    .then((data) => res.json(data));
};

module.exports = {
  handleGetHomePage: handleGetHomePage,
};
