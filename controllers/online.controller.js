const onlineModel = require("../models/online.model");

// online
// online
// ici c'est pour enregistrer un utilisateur en ligne
module.exports.createOnline = async (req, res) => {
  const online = new onlineModel(req.body);

  try {
    // enregistrer la personne en ligne dans la bdd
    const save = await online.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all online
// all online
// afficher toutes les fois ou des utilisateurs ont été en ligne
module.exports.allOnline = async (req, res) => {
  try {
    // obtenir la liste de toutes les fois ou des utilisateurs ont été en ligne
    const allOnline = await onlineModel.find().select();
    // ici on affiche toutes les fois
    res.status(200).json(allOnline);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
