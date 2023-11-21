const quarterModel = require("../models/quarter.model");
const ObjectID = require("mongoose").Types.ObjectId;

// enregistrer le quartier
// enregistrer le quartier
// on enregistre le quartier dans la bdd
module.exports.saveQuarter = async (req, res) => {
  const quartier = new quarterModel(req.body);

  try {
    // ici on enregistre le quartier dans la bdd
    const save = await quartier.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// tout les quartiers
// tout les quartiers
// on affiche les quartiers
module.exports.allQuarter = async (req, res) => {
  try {
    // ici on recupere tout les quartiers depuis la bdd pour pouvoir l'afficher
    const afficherToutLesQuartiers = await quarterModel.find().select();
    res.status(200).json(afficherToutLesQuartiers);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos du quartier
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const quarter = await quarterModel.findById(req.params.id);

    if (quarter.userId === req.body.userId) {

      await quarter.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }

  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// masquer quartier
// masquer quartier
// la logique ci nous permet de masquer un quartier
/*module.exports.hideQuarter = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const { hide } = req.body;

  try {
    const masquerQuartier = await quarterModel.findById(
      req.params.id
    );
    // updateOne est une fonction de mongodb pour modifier les donnees de 1 utilisateur
    await masquerQuartier.updateOne({
      hide,
    });
    res.status(200).json({
      message: "Success !",
    });
  } catch (err) {
    // on cas d'echec, message d'erreur
    res.status(500).json(err);
  }
};*/
// masquer quartier
