const postModel = require("../models/post.model");
const ObjectID = require("mongoose").Types.ObjectId;

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

// all post
// all post
// afficher tout les posts
module.exports.allPost = async (req, res) => {
  try {
    // ici on recupere tout les posts dans la bdd
    const allpost = await postModel.find().select();
    res.status(200).json(allpost);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// one post
// one post
// en fonction de l'id, afficher un post
module.exports.onePost = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    postModel.findById(req.params.id, (err, docs) => {
      // dans ce cas, l'id existe, alors on affiche un post
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// modifier la description du post
// modifier la description du post
// modifier la description du post
module.exports.updatePost = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const post = await postModel.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Publication modifiée avec succèss !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
