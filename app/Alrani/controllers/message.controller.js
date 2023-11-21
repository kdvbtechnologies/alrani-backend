const messageModel = require("../models/message.model");

// envoyer un nouveau message
// envoyer un nouveau message
module.exports.newMessage = async (req, res) => {
  const newMessage = new messageModel(req.body);

  try {
    // enregistrer le nouveau message dans la bdd
    const message = await newMessage.save();
    res.status(200).json(message);
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
