const subscribeModel = require("../models/subscribe.model");
const ObjectID = require("mongoose").Types.ObjectId;


// new subscriber
// new subscriber
// nouveau abonner (s'abonner)
module.exports.newSubscriber = async (req, res) => {
  const newSubscriber = new subscribeModel(req.body);

  try {
    // enregistrer l'abonné dans la bdd
    const subscribe = await newSubscriber.save();
    res.status(200).json(subscribe);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all subscriber
// all subscriber
// afficher tout les abonnés
module.exports.allSubscriber = async (req, res) => {
  try {
    // obtenir la liste de tout les abonnés
    const allSubscriber = await subscribeModel.find().select();
    // ici on affiche tout les abonnés
    res.status(200).json(allSubscriber);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos (par exemple: s'abonner, se desabonner)
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const subscribe = await subscribeModel.findById(req.params.id);

    if (subscribe.userId === req.body.userId) {
      await subscribe.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};