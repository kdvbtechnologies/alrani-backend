const collaboratorModel = require("../models/collaborator.model");

// ajouter un nouveau collaborateur
// ajouter un nouveau collaborateur
module.exports.newCollaborator = async (req, res) => {
  const newCollaborator = new collaboratorModel(req.body);

  try {
    // enregistrer le collaborateur dans la bdd
    const collaborator = await newCollaborator.save();
    res.status(200).json(collaborator);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all Collaborator
// all Collaborator
// afficher toute les pages ou la personne a été ajouté comme collaborateur
module.exports.allCollaborator = async (req, res) => {
  try {
    // ici on recupere les donnees dans la bdd
    const allCollaborator = await collaboratorModel.find().select();
    res.status(200).json(allCollaborator);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les informations liées au collaborateur (ex: lui retirer de la gestion d'une page, lui attribuer un role superieure tel que Collaborateur++)
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const collaborator = await collaboratorModel.findById(req.params.id);

    if (collaborator.userId === req.body.userId) {

      await collaborator.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }

  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};