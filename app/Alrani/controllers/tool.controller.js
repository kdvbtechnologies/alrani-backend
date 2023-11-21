const toolModel = require("../models/tool.model");
const ObjectID = require("mongoose").Types.ObjectId;

// activer un outil 
// activer un outil 
module.exports.activateTool = async (req, res) => {
  const activateTool = new toolModel(req.body);

  try {
    // logique pour activer un outil
    const tool = await activateTool.save();
    // on affiche l'outil activer
    res.status(200).json(tool);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// tout les outils
// tout les outils
// afficher tout les outils qui ont ete activer
module.exports.allTool = async (req, res) => {
  try {
    // logique pour afficher tout les outils
    const tool = await toolModel.find().select();
    // ici on affiche les outils
    res.status(200).json(tool);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos lié à l'outil
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const tool = await toolModel.findById(req.params.id);

    if (tool.userId === req.body.userId) {

      await tool.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }

  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};