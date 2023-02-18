const reponseModel = require("../models/reponse.model");

// create reponse
// create reponse
// ici c'est pour creer la reponse du commentaire
module.exports.createReponse = async (req, res) => {
  const reponse = new reponseModel(req.body);

  try {
    // ici c'est pour enregistrer la reponse dans la bdd
    const save = await reponse.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all reponse
// all reponse
// afficher toute les reponses
module.exports.allReponse = async (req, res) => {
  try {
    // ici on recupere toutes les reponses dans la bdd
    const allreponse = await reponseModel.find().select();
    // ici on affiche toute les reponses
    res.status(200).json(allreponse);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// modifier la reponse
// modifier la reponse
module.exports.updateReponse = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    // id existe, on recherche la reponse a modifié
    const reponse = await reponseModel.findById(req.params.id);
    if (reponse.userId === req.body.userId) {
      // on modifie la reponse
      await reponse.updateOne({ $set: req.body });
      // modification reussi, on envoie le message de succès
      res.status(200).json("Réponse modifier avec succès !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
