const superModuleModel = require("../models/superModule.model");

// create super module
// create super module
// ici c'est pour creer un super module
module.exports.createSuperModule = async (req, res) => {
  const superModule = new superModuleModel(req.body);

  try {
    // ici c'est pour enregistrer le super module dans la bdd
    const save = await superModule.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all super module
// all super module
// on affiche tout les super modules
module.exports.allSuperModule = async (req, res) => {
  try {
    // ici on recupere tout les super modules de la bdd
    const allsupermodule = await superModuleModel.find().select();
    res.status(200).json(allsupermodule);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
