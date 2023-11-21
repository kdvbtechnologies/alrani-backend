const cityModel = require("../models/city.model");
const ObjectID = require("mongoose").Types.ObjectId;

// enregistrer la ville
// enregistrer la ville
// on enregistre la ville dans la bdd
module.exports.saveCity = async (req, res) => {
  const ville = new cityModel(req.body);

  try {
    // ici on enregistre la ville dans la bdd
    const save = await ville.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// toutes les villes
// toutes les villes
// on affiche les villes
module.exports.allCity = async (req, res) => {
  try {
    // ici on recupere toutes les villes depuis la bdd pour pouvoir l'afficher
    const afficherToutesLesVilles = await cityModel.find().select();
    res.status(200).json(afficherToutesLesVilles);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos de la ville
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const city = await cityModel.findById(req.params.id);

    if (city.userId === req.body.userId) {

      await city.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }

  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// masquer ville
// masquer ville
// la logique ci nous permet de masquer une ville
/*module.exports.updateCity = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const { masquer } = req.body;

  try {
    const masquerVille = await cityModel.findById(req.params.id);
    // updateOne est une fonction de mongodb pour modifier les donnees de 1 utilisateur
    await masquerVille.updateOne({
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
*/
// masquer ville
