const handleChange = (req, res, db) => {
  const { id } = req.params;
  db("blogs")
    .where({ id: id })
    .update({ title: req.body.title, content: req.body.content }, [
      "id",
      "title",
    ])
    .catch((err) => console.log(err));
};

const handleLike = (req, res, db) => {
  const { id } = req.params;
  db("blogs")
    .where("id", "=", id)
    .increment("likes", 1)
    .then((data) => res.json(data));
};

module.exports = {
  handleChange: handleChange,
  handleLike: handleLike,
};
