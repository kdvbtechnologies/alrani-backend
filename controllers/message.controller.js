const messageModel = require("../models/message.model");

// creer une conversation
// creer une message
// ici c'est pour creer une conversation
module.exports.createMessage = async (req, res) => {
  const conversation = new messageModel(req.body);

  try {
    // ici c'est pour enregistrer une conversation dans la bdd
    const save = await conversation.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all message
// all message
// afficher tout les messages
module.exports.allMessage = async (req, res) => {
  try {
    // ici on recupere tout les messages dans la bdd
    const allMessage = await messageModel.find().select();
    res.status(200).json(allMessage);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
