const countryModel = require("../models/country.model");
const ObjectID = require("mongoose").Types.ObjectId;

// enregistrer le pays
// enregistrer le pays
// on enregistre le pays dans la bdd
module.exports.saveCountry = async (req, res) => {
  const pays = new countryModel(req.body);

  try {
    // ici on enregistre le pays dans la bdd
    const save = await pays.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// tout les pays
// tout les pays
// on affiche les pays
module.exports.allCountry = async (req, res) => {
  try {
    // ici on recupere tout les pays depuis la bdd pour pouvoir l'afficher
    const afficherToutLesPays = await countryModel.find().select();
    res.status(200).json(afficherToutLesPays);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos du pays
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const country = await countryModel.findById(req.params.id);

    if (country.userId === req.body.userId) {

      await country.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }

  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// masquer pays
// masquer pays
// la logique ci nous permet de masquer un pays
/*module.exports.updateCountry = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const { masquer } = req.body;

  try {
    const masquerPays = await countryModel.findById(req.params.id);
    // updateOne est une fonction de mongodb pour modifier les donnees de 1 utilisateur
    await masquerPays.updateOne({
      masquer,
    });
    res.status(200).json({
      message: "Success !",
    });
  } catch (err) {
    // on cas d'echec, message d'erreur
    res.status(500).json(err);
  }
};
// masquer pays
*/