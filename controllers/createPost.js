const handleCreatePost = (req, res, db) => {
  const { title, content } = req.body;
  db("blogs")
    .insert({
      title: title,
      content: content,
      likes: 0,
    })
    .then((data) => res.json(data));
};

module.exports = {
  handleCreatePost: handleCreatePost,
};
