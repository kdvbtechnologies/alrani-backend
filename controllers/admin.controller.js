const adminModel = require("../models/admin.model");
const ObjectID = require("mongoose").Types.ObjectId;

// ajouter admin
// ajouter admin
// ici c'est pour ajouter un admin
module.exports.createAdmin = async (req, res) => {
  const admin = new adminModel(req.body);

  try {
    // ici c'est pour ajouter l'admin dans la bdd
    const save = await admin.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all admin
// all admin
// afficher toute les pages ou la personne a été ajouté comme admin
module.exports.allAdmin = async (req, res) => {
  try {
    // ici on recupere les donnees dans la bdd
    const alladmin = await adminModel.find().select();
    res.status(200).json(alladmin);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// retirer Admin
// retirer Admin
// ici c'est pour retirer un Administrateur
module.exports.deleteAdmin = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    // id existe. on retire l'admin
    await adminModel.deleteOne({ _id: req.params.id }).exec();
    // message de succès
    res.status(200).json({ message: "Administrateur retirer avec succès" });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json({ message: err });
  }
};
// retirer Admin
