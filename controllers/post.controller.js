const postModel = require("../models/post.model");
const ObjectID = require("mongoose").Types.ObjectId;
// ceci est lier a la logique de publierVideo
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// create Post
// create Post
// ici c'est pour creer un nouveau post
module.exports.createPost = async (req, res) => {
  const post = new postModel(req.body);

  try {
    // ici c'est pour enregistrer le post dans la bdd
    const save = await post.save();
    res.status(200).json(save);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all post
// all post
// afficher tout les posts
module.exports.allPost = async (req, res) => {
  try {
    // ici on recupere tout les posts dans la bdd
    const allpost = await postModel.find().select();
    res.status(200).json(allpost);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// one post
// one post
// en fonction de l'id, afficher un post
module.exports.onePost = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    postModel.findById(req.params.id, (err, docs) => {
      // dans ce cas, l'id existe, alors on affiche un post
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// modifier la description du post
// modifier la description du post
// modifier la description du post
module.exports.updatePost = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const post = await postModel.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Publication modifiée avec succèss !");
    }
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// publier une video
// la logique ci, c'est pour envoyer la video sur cloudinary
module.exports.publierVideo = async (req, res) => {
  try {
    // obtenir le nom du fichier et l'extension en passant par multer
    const storage = multer.diskStorage({
      filename: (req, file, cb) => {
        const fileExt = file.originalname.split(".").pop();
        const filename = `${new Date().getTime()}.${fileExt}`;
        cb(null, filename);
      },
    });

    // ici on verifie l'extension de la video si c'est mp4
    const fileFilter = (req, file, cb) => {
      if (file.mimetype === "video/mp4") {
        cb(null, true);
      } else {
        cb(
          {
            message:
              "Format non supporter, seulement les vidéos de format mp4 qui sont acceptées",
          },
          false
        );
      }
    };

    // ici on dit le nombre de mot que doit avoir le fichier et la taille du fichier
    const upload = multer({
      storage,
      limits: {
        fieldNameSize: 200,
        fileSize: 30 * 1024 * 1024,
      },
      fileFilter,
    }).single("video");

    upload(req, res, (err) => {
      if (err) {
        return res.send(err);
      }

      // ici on envoie le fichier sur cloudinary
      cloudinary.config({
        cloud_name: "rasivyy",
        api_key: "599176842647747",
        api_secret: "OwpCImclbCniesVvDryv1c3pvSE",
      });
      const { path } = req.file; // le fichier video devient disponible dans la requete a ce point
      const fName = req.file.originalname.split(".")[0];
      cloudinary.uploader.upload_large(
        path,
        {
          resource_type: "video",
          public_id: `Alrani - Video/${fName}`,
          chunk_size: 6000000,
          eager: [
            {
              width: 300,
              height: 300,
              crop: "pad",
              audio_codec: "none",
            },
            {
              width: 160,
              height: 100,
              crop: "crop",
              gravity: "south",
              audio_codec: "none",
            },
          ],
        },
        // apres avoir uploader la video sur cloudinary, ici c'est la partie des reponses/des erreurs
        (err, video) => {
          if (err) return res.send(err);
          fs.unlinkSync(path);
          return res.send(video);
        }
      );
    });
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};
