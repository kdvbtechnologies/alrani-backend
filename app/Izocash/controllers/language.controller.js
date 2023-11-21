const languageModel = require("../models/language.model");
const ObjectID = require("mongoose").Types.ObjectId;

// enregistrer la langue
// enregistrer la langue
// on enregistre la langue dans la bdd
module.exports.saveLanguage = async (req, res) => {
  const langue = new languageModel(req.body);

  try {
    // ici on enregistre la langue dans la bdd
    const save = await langue.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// toutes les langues
// toutes les langues
// on affiche les langues
module.exports.allLanguage = async (req, res) => {
  try {
    // ici on recupere toutes les langues depuis la bdd pour pouvoir l'afficher
    const afficherToutesLesLangues = await languageModel.find().select();
    res.status(200).json(afficherToutesLesLangues);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos de la langue
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const language = await languageModel.findById(req.params.id);

    if (language.userId === req.body.userId) {

      await language.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }

  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// masquer langue
// masquer langue
// la logique ci nous permet de masquer une langue
/*module.exports.hideLanguage = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const { hide } = req.body;

  try {
    const masquerLangue = await languageModel.findById(req.params.id);
    // updateOne est une fonction de mongodb pour modifier les donnees de 1 utilisateur
    await masquerLangue.updateOne({
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
// masquer langue
