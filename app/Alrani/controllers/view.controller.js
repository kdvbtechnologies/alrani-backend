const viewModel = require("../models/view.model");

// 1 vue
// 1 vue
// ici c'est pour lorsqu'une personne a vue une publication
module.exports.newView = async (req, res) => {
  const newView = new viewModel(req.body);

  try {
    // s'il clique c'est 1 vue
    // enregistrer la vue dans la bdd
    const view = await newView.save();
    res.status(200).json(view);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
// 1 vue

// all vue
// all vue
// afficher toutes les vues
module.exports.allView = async (req, res) => {
  try {
    // obtenir la liste de toutes les vues
    const allVue = await viewModel.find().select();
    // ici on affiche toutes les vues
    res.status(200).json(allVue);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
// all vue
