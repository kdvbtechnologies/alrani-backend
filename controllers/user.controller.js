const userModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;
const bcryptjs = require("bcryptjs");
//const jwt = require("jsonwebtoken");

// mettre photo de profil
const cloudinary = require("cloudinary").v2;
const sharp = require("sharp");
//
cloudinary.config({
  cloud_name: "rasivyy",
  api_key: "599176842647747",
  api_secret: "OwpCImclbCniesVvDryv1c3pvSE",
});
//
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

/*
// ici c'est pour creer le token qui sera utiliser à la partie connexion
const maxAge = 90 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};
*/

// inscription
// inscription
// inscription
// inscription
module.exports.signup = async (req, res) => {
  const {
    nomAuteur,
    email,
    password,
    badgeVerified,
    utilisateur,
    buttonActiverSurLeProfil,
    visible,
    photoProfil,
  } = req.body;
  // on verifie en fonction de l'email si la personne ne s'etait pas deja inscrite auparavant
  const user = await userModel.findOne({ email }).exec();
  if (user) {
    return res.status(401).json({
      message:
        "Il y'a une personne qui s'est déjà inscrite avec cette adresse e-mail",
    });
  }
  // on crypte le mot de passe entrer danns l'input
  const hashedPassword = bcryptjs.hashSync(password);

  try {
    // si rien n'est trouver, on enregistre la personne dans la bdd
    const user = await userModel.create({
      nomAuteur,
      email,
      password: hashedPassword,
      badgeVerified,
      utilisateur,
      buttonActiverSurLeProfil,
      visible,
      photoProfil,
    });
    res.status(200).json({
      message: "Inscription réussi avec succès ! ",
      idAuteur: user._id,
      nomAuteur: user.nomAuteur,
    });
  } catch (err) {
    // si quelque chose se passe mal (par exemple pas de connexion internet), on renvoie une erreur
    return res.status(400).json(err);
  }
};

// connexion
// connexion
// connexion
// connexion
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // on verifie si l'email entrer existe dans la bdd
    const user = await userModel.findOne({ email }).exec();
    // si l'email n'existe pas, on renvoie ce message d'erreur
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect !" });
    }

    //on verifie si le mot de passe entrer correspond au mot de passe qui etait crypter a l'inscription
    const isMatch = await bcryptjs.compare(password, user.password);
    //si le mot de passe entrer ne correspond pas, on renvoie ce message d'erreur
    if (!isMatch)
      return res
        .status(400)
        .json({ message: "Email ou mot de passe incorrect ! " });

    // si le mot de passe correspond, on cree le token
    //const token = createToken(user);
    //res.cookie("jwt", token, { httpOnly: true, maxAge });

    // ici on envoie le message de réussite
    res.status(200).json({
      message: "Connexion réussie !",
      idAuteur: user._id,
      nomAuteur: user.nomAuteur,
	  virtualNumber: user.telephone,
    });
  } catch (err) {
    // on cas d'echec, on envoie cet erreur 400
    res.status(400).json(err);
  }
};

// all user
// all user
// all user
// afficher tout les utilisateurs
module.exports.allUser = async (req, res) => {
  try {
    // logique pour afficher tout les utilisateurs sans leur mot de passe
    const allUser = await userModel.find().select("-password");
    // ici on affiche tout les utilisateurs
    res.status(200).json(allUser);
  } catch (err) {
    // on cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// one user
// one user
// one user
// en fonction de l'id, afficher un utilisateur
module.exports.oneUser = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID introuvable : " + req.params.id);

  try {
    userModel
      .findById(req.params.id, (err, docs) => {
        // dans ce cas, l'id existe, alors on affiche un utilisateur sans son mot de passe
        if (!err) res.status(200).json(docs);
      })
      .select("-password");
  } catch (err) {
    // on cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// mettre photo profil
module.exports.photoProfil = async (req, res) => {
  try {
    // ici on reduit le poids de l'image sans perdre la qualité
    const data = await sharp(req.file.buffer).webp({ quality: 20 }).toBuffer();
    const stream = cloudinary.uploader.upload_stream(
      { folder: "Alrani - Photo Profil" },
      (error, result) => {
        if (error) return console.error(error);
        // ici on renvoie l'URL de l'image après l'upload sur cloudinary
        return res.json({ urlPhotoProfil: result.secure_url });
      }
    );
    bufferToStream(data).pipe(stream);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// ajouter l'url de la photo au profil
// cette logique permet aussi de modifier les infos de l'utilisateur
module.exports.updateUserInfos = async (req, res) => {
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
};
