const accountModel = require("../models/account.model");
const ObjectID = require("mongoose").Types.ObjectId;

// envoyer photo
const cloudinary = require("cloudinary").v2;
const sharp = require("sharp");

cloudinary.config({
  cloud_name: "dar5ybbxx",
  api_key: "414316961264459",
  api_secret: "K6R0JiCW3lWIX5Kn6PLzb-RHQZw",
});

const { Readable } = require("stream");
const bufferToStream = (buffer) => {
  const readable = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
  return readable;
};


// envoyer video
const multer = require("multer");
const fs = require("fs");

// creer un nouveau compte
// creer un nouveau compte
module.exports.createAccount = async (req, res) => {
  const newAccount = new accountModel(req.body);

  try {
    // logique pour creer un nouveau compte
    const account = await newAccount.save();
    res.status(200).json(account);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// all account
// all account
// afficher tout les comptes
module.exports.allAccount = async (req, res) => {
  try {
    // logique pour afficher tout les comptes
    const allAccount = await accountModel.find().select();
    // ici on affiche tout les comptes
    res.status(200).json(allAccount);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre a jour les infos du compte
module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    const account = await accountModel.findById(req.params.id);

    if (account.userId === req.body.userId) {

      await account.updateOne({ $set: req.body });
      res.status(200).json("update success !");
    }

  } catch (err) {
    // on cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};


// envoyer photo sur cloudinary
module.exports.sendPhoto = async (req, res) => {
  try {
    // ici on reduit le poids de l'image sans perdre la qualité
    const data = await sharp(req.file.buffer).webp({ quality: 20 }).toBuffer();
    const stream = cloudinary.uploader.upload_stream(
      { folder: "Alrani 1 - Photos" },
      (error, result) => {
        if (error) return console.error(error);
        // ici on renvoie l'URL de l'image après l'upload sur cloudinary
        return res.json({ urlPhoto: result.secure_url });
      }
    );
    bufferToStream(data).pipe(stream);
  } catch (err) {
    return res.status(500).json(err);
  }
};


// envoyer video sur cloudinary
module.exports.sendVideo = async (req, res) => {
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
            message: "Format non supporter, seulement les vidéos de format mp4 qui sont acceptées",
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
        fileSize: 30 * 100000 * 10000, // la taille maximale de la vidéo est de 30GB
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
          public_id: `Alrani 1 - Videos/${fName}`,
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


/* a l'inscription

nomAuteur,
      email,
      password: hashedPassword,
      badgeVerified,
      utilisateur,
      buttonActiverSurLeProfil,
      visible,
      photoProfil,

*/

// ajouter l'url de la photo au profil
// cette logique permet aussi de modifier les infos de l'utilisateur
/*module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    nomAuteur,
    email,
    password,
    photoProfil,
    badgeVerified,
    utilisateur,
    ageAuteur,
    genreAuteur,
    paysAuteur,
    paragrapheHistoire,
    serviceOuOccupation,
    enLigne,
    buttonActiverSurLeProfil,
    visible,

    // moyen de paiement
    // moyen de paiement de son numero virtuel sur Alrani
    idPaymentMethod,
    namePaymentMethod,
    idUserPaymentMethod,
    nameUserPaymentMethod,

    // Plus - alrani Plus
    balancePlusDeals,
    balancePlusFormation,

    // monetization - alrani monetization
    balanceMonetization,
    balanceMonetizationDeals,
    balanceMonetizationFormation,

    // Collaborator - alrani Collaborator
    balanceCollaborator,
    balanceCollaboratorDeals,
    balanceCollaboratorFormation,
  } = req.body;

  try {
    const user = await userModel.findById(req.params.id);
    if (user.userId === req.body.userId) {
      // updateOne est une fonction de mongodb pour modifier les donnees de 1 utilisateur
      await user.updateOne({
        nomAuteur,
        email,
        password,
        photoProfil,
        badgeVerified,
        utilisateur,
        ageAuteur,
        genreAuteur,
        paysAuteur,
        paragrapheHistoire,
        serviceOuOccupation,
        enLigne,
        buttonActiverSurLeProfil,
        visible,

        // moyen de paiement
        // moyen de paiement de son numero virtuel sur Alrani
        idPaymentMethod,
        namePaymentMethod,
        idUserPaymentMethod,
        nameUserPaymentMethod,

        // Plus - alrani Plus
        balancePlusDeals,
        balancePlusFormation,

        // monetization - alrani monetization
        balanceMonetization,
        balanceMonetizationDeals,
        balanceMonetizationFormation,

        // Collaborator - alrani Collaborator
        balanceCollaborator,
        balanceCollaboratorDeals,
        balanceCollaboratorFormation,
      });
      res.status(200).json({
        message: "Success !",
      });
    }
  } catch (err) {
    // on cas d'echec, message d'erreur
    res.status(500).json(err);
  }
};*/
