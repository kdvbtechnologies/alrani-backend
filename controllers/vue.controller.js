const vueModel = require("../models/vue.model");

// 1 vue
// 1 vue
// ici c'est pour lorsqu'une personne a vue une publication
module.exports.createVue = async (req, res) => {
  const vue = new vueModel(req.body);

  try {
    // s'il clique c'est 1 vue
    // enregistrer la vue dans la bdd
    const save = await vue.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
// 1 vue

// all vue
// all vue
// afficher toutes les vues
module.exports.allVue = async (req, res) => {
  try {
    // obtenir la liste de toutes les vues
    const allVue = await vueModel.find().select();
    // ici on affiche toutes les vues
    res.status(200).json(allVue);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
// all vue
