const moduleModel = require("../models/module.model");

// create module
// create module
// ici c'est pour creer un module
module.exports.createModule = async (req, res) => {
  const module = new moduleModel(req.body);

  try {
    // ici c'est pour enregistrer le module dans la bdd
    const save = await module.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all module
// all module
// afficher tout les modules
module.exports.allModule = async (req, res) => {
  try {
    // ici on recupere tout les modules de la bdd
    const allmodule = await moduleModel.find().select();
    res.status(200).json(allmodule);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
