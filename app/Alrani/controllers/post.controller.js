const postModel = require("../models/post.model");
const ObjectID = require("mongoose").Types.ObjectId;

// publier un nouveau post
// publier un nouveau post
module.exports.newPost = async (req, res) => {
  const newPost = new postModel(req.body);

  try {
    // enregistrer le post dans la bdd
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all post
// all post
// afficher tout les posts
module.exports.allPost = async (req, res) => {
  try {
    // recuperer tout les posts de la bdd
    const allpost = await postModel.find().select();
    res.status(200).json(allpost);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos du post
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const post = await postModel.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

