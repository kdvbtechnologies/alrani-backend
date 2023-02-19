const abonnerModel = require("../models/abonner.model");
const ObjectID = require("mongoose").Types.ObjectId;

// s'abonner
// s'abonner
// s'abonner
// ici c'est pour s'abonner
module.exports.createAbonner = async (req, res) => {
  const abonner = new abonnerModel(req.body);

  try {
    // enregistrer l'abonné dans la bdd
    const save = await abonner.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
// s'abonner

// all abonner
// all abonner
// all abonner
// afficher toute les abonnes
module.exports.allAbonner = async (req, res) => {
  try {
    // obtenir la liste de tout les abonnés
    const allabonner = await abonnerModel.find().select();
    // ici on affiche tout les abonnés
    res.status(200).json(allabonner);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
// all abonner

// se desabonner
// se desabonner
// se desabonner
// ici c'est pour se desabonner
module.exports.deleteAbonner = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    // id existe. on desabonne l'utilisateur
    await abonnerModel.deleteOne({ _id: req.params.id }).exec();
    // message de succès
    res.status(200).json({ message: "Utilisateur désabonner avec succès" });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json({ message: err });
  }
};
// se desabonner
