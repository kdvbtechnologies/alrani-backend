const notificationModel = require("../models/notification.model");
const ObjectID = require("mongoose").Types.ObjectId;

// nouvelle notification
// nouvelle notification
module.exports.newNotification = async (req, res) => {
  const newNotification = new notificationModel(req.body);

  try {
    // enregistrer la notification dans la bdd
    const notification = await newNotification.save();
    res.status(200).json(notification);
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

// mettre a jour les infos liés a la notification
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const notification = await notificationModel.findById(req.params.id);
    
    if (notification.userId === req.body.userId) {
      await notification.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
