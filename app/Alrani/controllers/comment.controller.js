const commentModel = require("../models/comment.model");
const ObjectID = require("mongoose").Types.ObjectId;


// publier un nouveau commentaire
// publier un nouveau commentaire
module.exports.newComment = async (req, res) => {
  const newComment = new commentModel(req.body);

  try {
    // enregistrer le commentaire dans la bdd
    const comment = await newComment.save();
    res.status(200).json(comment);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all comment
// all comment
// afficher tout les commentaires
module.exports.allComment = async (req, res) => {
  try {
    // ici on recupere tout les commentaires dans la bdd
    const allcomment = await commentModel.find().select();
    // ici on affiche tout les commentaires
    res.status(200).json(allcomment);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// modifier le commentaire
// modifier le commentaire
module.exports.updateComment = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    // id existe, on recherche le commentaire a modifié
    const comment = await commentModel.findById(req.params.id);
    if (comment.userId === req.body.userId) {
      // on modifie le commentaire
      await comment.updateOne({ $set: req.body });
      // modification reussi, on envoie le message de succès
      res.status(200).json("Commentaire modifier avec succès !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
