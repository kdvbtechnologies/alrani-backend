const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");

// inscription
// inscription
module.exports.signup = async (req, res) => {
  const { nameUser, virtualNumber, password, } = req.body;
  // on verifie en fonction du numero virtuel si la personne ne s'etait pas deja inscrite auparavant
  const user = await userModel.findOne({ virtualNumber }).exec();
  if (user) {
    return res.status(401).json({
      message: "Il y'a une personne qui s'est déjà inscrite avec ce numéro virtuel",
    });
  }

  // on crypte le mot de passe entrer danns l'input
  const hashedPassword = bcryptjs.hashSync(password);

  try {
    // si rien n'est trouver, on enregistre la personne dans la bdd
    const user = await userModel.create({
      nameUser,
      virtualNumber,
      password: hashedPassword,
    });
    res.status(200).json({
      message: "Inscription réussi avec succès ! ",
      idUser: user._id,
      nameUser: user.nameUser,
    });
  } catch (err) {
    // si quelque chose se passe mal (par exemple pas de connexion internet), on renvoie une erreur
    return res.status(400).json(err);
  }
};

// connexion
// connexion
module.exports.login = async (req, res) => {
  try {
    const { virtualNumber, password } = req.body;
    // on verifie si le Numéro virtuel entrer existe dans la bdd
    const user = await userModel.findOne({ virtualNumber }).exec();
    // si le Numéro virtuel n'existe pas, on renvoie ce message d'erreur
    if (!user) {
      return res
        .status(401)
        .json({ message: "Numéro virtuel ou mot de passe incorrect !" });
    }

    //on verifie si le mot de passe entrer correspond au mot de passe qui etait crypter a l'inscription
    const isMatch = await bcryptjs.compare(password, user.password);
    //si le mot de passe entrer ne correspond pas, on renvoie ce message d'erreur
    if (!isMatch)
      return res
        .status(400)
        .json({ message: "Numéro virtuel ou mot de passe incorrect ! " });

    // ici on envoie le message de réussite
    res.status(200).json({
      message: "Connexion réussie !",
      idUser: user._id,
      nameUser: user.nameUser,
      virtualNumber: user.virtualNumber,
    });
  } catch (err) {
    // on cas d'echec, on envoie cet erreur 400
    res.status(400).json(err);
  }
};

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
