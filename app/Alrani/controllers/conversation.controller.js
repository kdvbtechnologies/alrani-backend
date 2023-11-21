const conversationModel = require("../models/conversation.model");
const ObjectID = require("mongoose").Types.ObjectId;

// commencer une nouvelle conversation
// commencer une nouvelle conversation
module.exports.newConversation = async (req, res) => {
  const newConversation = new conversationModel(req.body);

  try {
    // enregistrer la nouvelle conversation
    const conversation = await newConversation.save();
    res.status(200).json(conversation);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all conversation
// all conversation
// afficher toute les conversations
module.exports.allConversation = async (req, res) => {
  try {
    // recuperer toutes les conversations de la bdd
    const allConversation = await conversationModel.find().select();
    res.status(200).json(allConversation);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos de la conversation
module.exports.updateConversation = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const conversation = await conversationModel.findById(req.params.id);
    if (conversation.userId === req.body.userId) {
      await conversation.updateOne({ $set: req.body });
      res.status(200).json("Dernier message mis à jour avec succès !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// one conversation
// one conversation
// en fonction de l'id, afficher une conversation
/*module.exports.oneConversation = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    conversationModel.findById(req.params.id, (err, docs) => {
      // dans ce cas, l'id existe, alors on affiche une conversation
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// supprimer conversation
// supprimer conversation
// ici c'est pour supprimer une conversation
module.exports.deleteConversation = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    // id existe. on supprime la conversation
    await conversationModel.deleteOne({ _id: req.params.id }).exec();
    // message de succès
    res.status(200).json({ message: "Conversation supprimer avec succès" });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json({ message: err });
  }
};*/
// supprimer conversation
