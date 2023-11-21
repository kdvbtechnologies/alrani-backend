const stockModel = require("../models/stock.model");

// on enregistre le montant du Stock a offrir dans la bdd
module.exports.saveAmount = async (req, res) => {
  const montantAoffrir = new stockModel(req.body);

  try {
    // ici on enregistre le stock a offrir dans la bdd
    const save = await montantAoffrir.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// on affiche tout les montants enregistrer
module.exports.allAmount = async (req, res) => {
  try {
    // ici on recupere tout les montantAoffrir depuis la bdd pour pouvoir l'afficher
    const afficherToutLesMontantsAoffrir = await stockModel.find().select();
    res.status(200).json(afficherToutLesMontantsAoffrir);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
