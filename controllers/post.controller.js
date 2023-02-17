const postModel = require("../models/post.model");

// create Post
// create Post
// ici c'est pour creer un nouveau post
module.exports.createPost = async (req, res) => {
  const post = new postModel(req.body);

  try {
    // ici c'est pour enregistrer le post dans la bdd
    const save = await post.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
