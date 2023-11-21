const replyModel = require("../models/reply.model");
const ObjectID = require("mongoose").Types.ObjectId;

// ecrire une reponse
// ecrire une reponse
module.exports.newReply = async (req, res) => {
  const newReply = new replyModel(req.body);

  try {
    // enregistrer la reponse dans la bdd
    const reply = await newReply.save();
    res.status(200).json(reply);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all reponse
// all reponse
// afficher toute les reponses
module.exports.allReply = async (req, res) => {
  try {
    // ici on recupere toutes les reponses dans la bdd
    const allreponse = await replyModel.find().select();
    // ici on affiche toute les reponses
    res.status(200).json(allreponse);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// modifier la reponse
// modifier la reponse
module.exports.updateReply = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    // id existe, on recherche la reponse a modifié
    const reply = await replyModel.findById(req.params.id);
    if (reply.userId === req.body.userId) {
      // on modifie la reponse
      await reply.updateOne({ $set: req.body });
      // modification reussi, on envoie le message de succès
      res.status(200).json("update success !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};