const videoModel = require("../models/video.model");
const ObjectID = require("mongoose").Types.ObjectId;


// nouvelle video
// nouvelle video
// logique pour publier une nouvelle video
module.exports.newVideo = async (req, res) => {
  const newVideo = new videoModel(req.body);

  try {
    // video enregistrer
    const video = await newVideo.save();
    // video publier
    res.status(200).json(video);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all video
// all video
// on affiche toute les videos
module.exports.allVideo = async (req, res) => {
  try {
    // logique pour afficher toute les videos
    const allVideo = await videoModel.find().select();
    res.status(200).json(allVideo);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos de la video
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const video = await videoModel.findById(req.params.id);
    if (video.userId === req.body.userId) {
      await video.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
