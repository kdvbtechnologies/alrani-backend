const zoneModel = require("../models/zone.model");
const ObjectID = require("mongoose").Types.ObjectId;

// enregistrer la zone
// enregistrer la zone
// on enregistre la zone dans la bdd
module.exports.saveZone = async (req, res) => {
  const zone = new zoneModel(req.body);

  try {
    // ici on enregistre la zone dans la bdd
    const save = await zone.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// toutes les zones
// toutes les zones
// on affiche les zones
module.exports.allZone = async (req, res) => {
  try {
    // ici on recupere toutes les zones depuis la bdd pour pouvoir l'afficher
    const afficherToutesLesZones = await zoneModel.find().select();
    res.status(200).json(afficherToutesLesZones);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos de la zone
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const zone = await zoneModel.findById(req.params.id);

    if (zone.userId === req.body.userId) {

      await zone.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }

  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// masquer zone
// masquer zone
// la logique ci nous permet de masquer une zone
/*module.exports.hideZone = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const { hide } = req.body;

  try {
    const hideZone = await zoneModel.findById(req.params.id);
    // updateOne est une fonction de mongodb pour modifier les donnees de 1 utilisateur
    await hideZone.updateOne({ hide });
    res.status(200).json({ message: "Success !" });
  } catch (err) {
    // on cas d'echec, message d'erreur
    res.status(500).json(err);
  }

};*/
// masquer zone
