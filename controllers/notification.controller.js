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

// one notification
// one notification
// en fonction de l'id, afficher une notification
module.exports.oneNotification = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    notificationModel.findById(req.params.id, (err, docs) => {
      // dans ce cas, l'id existe, alors on affiche une notification
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// supprimer une notification
// supprimer une notification
// ici c'est pour supprimer une notification
module.exports.deleteNotification = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    // id existe. on supprime la notification
    await notificationModel.deleteOne({ _id: req.params.id }).exec();
    // message de succès
    res.status(200).json({ message: "notification supprimer avec succès" });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json({ message: err });
  }
};
// supprimer une notification
