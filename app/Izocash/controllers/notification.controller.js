const notificationModel = require("../models/notification.model");
const ObjectID = require("mongoose").Types.ObjectId;

// creer une notification
// creer une notification
// ici c'est pour creer une notification
module.exports.createNotification = async (req, res) => {
  const notification = new notificationModel(req.body);

  try {
    // ici c'est pour enregistrer une notification dans la bdd
    const save = await notification.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all notification
// all notification
// afficher toute les notifications
module.exports.allNotification = async (req, res) => {
  try {
    // ici on recupere toutes les notifications dans la bdd
    const allNotification = await notificationModel.find().select();
    res.status(200).json(allNotification);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// modifier la notification
module.exports.updateNotification = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const notification = await notificationModel.findById(req.params.id);
    if (notification.userId === req.body.userId) {
      await notification.updateOne({ $set: req.body });
      res.status(200).json("la notification a ete lu !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
