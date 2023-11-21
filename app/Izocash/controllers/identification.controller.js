const identificationModel = require("../models/identification.model");

// save Infos
// save Infos
// on enregistre les informations d'identifications
module.exports.saveInfos = async (req, res) => {
  const infosIdentifications = new identificationModel(req.body);

  try {
    // logique pour enregistrer les informations d'identifications
    const infos = await infosIdentifications.save();
    // on affiche les infos enregistrer
    res.status(200).json(infos);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all infos
// all infos
// obtenir toute les informations d'identifications
module.exports.allInfos = async (req, res) => {
  try {
    // logique pour obtenir toute les informations d'identifications
    const infos = await identificationModel.find().select();
    // on affiche les infos obtenues
    res.status(200).json(infos);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
