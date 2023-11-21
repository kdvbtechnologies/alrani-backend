const moduleAcheterModel = require("../models/moduleAcheter.model");

// recu du module ou superModule acheter
// recu du module ou superModule acheter
// ici c'est pour ajouter le module/superModule qui a ete acheter a l'api moduleAcheter
module.exports.recuModuleAcheter = async (req, res) => {
  const moduleacheter = new moduleAcheterModel(req.body);

  try {
    // on enregistre le module acheter dans la bdd
    const save = await moduleacheter.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all recu module acheter
// all recu module acheter
// ici c'est pour afficher tout les recu des modules/superModules acheter
module.exports.allRecuModuleAcheter = async (req, res) => {
  try {
    // on recupere tout les recu de la bdd
    const allrecumoduleacheter = await moduleAcheterModel.find().select();
    res.status(200).json(allrecumoduleacheter);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
