const handleGetDetail = (req, res, db) => {
  const { id } = req.params;
  //從資料庫找出符合ID資料回傳data
  db.select("title", "content", "id")
    .from("blogs")
    .where("id", id)
    //回傳是陣列，所以選第一筆
    .then((data) => res.json(data[0]));
};

const handleDeleteDetail = (req, res, db) => {
  const { id } = req.params;
  db("blogs")
    .where("id", id)
    .del()
    //要回傳資料才能完成
    .then((data) => res.json(data));
};
module.exports = {
  handleGetDetail: handleGetDetail,
  handleDeleteDetail: handleDeleteDetail,
};
