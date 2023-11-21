const accountModel = require("../models/account.model");

// creer un nouveau compte
// creer un nouveau compte
module.exports.createAccount = async (req, res) => {
  const newAccount = new accountModel(req.body);

  try {
    // logique pour creer un nouveau compte
    const account = await newAccount.save();
    res.status(200).json(account);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all account
// all account
// afficher tout les comptes
module.exports.allAccount = async (req, res) => {
  try {
    // logique pour afficher tout les comptes
    const allAccount = await accountModel.find().select();
    // ici on affiche tout les comptes
    res.status(200).json(allAccount);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
