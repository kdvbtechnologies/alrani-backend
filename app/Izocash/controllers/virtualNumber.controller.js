const virtualNumberModel = require("../models/virtualNumber.model");

// enregistrer un numero virtuel
// enregistrer un numero virtuel
module.exports.saveVirtualNumber = async (req, res) => {
  const virtualNumber = new virtualNumberModel(req.body);

  try {
    // ici on enregistre le numero virtuel dans la bdd
    const number = await virtualNumber.save();
    res.status(200).json(number);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

// tout les numeros virtuels
// tout les numeros virtuels
// afficher tout les numeros virtuels
module.exports.allVirtualNumber = async (req, res) => {
  try {
    // ici on recupere tout les numeros Virtuels depuis la bdd pour pouvoir l'afficher
    const afficherToutLesNumerosVirtuels = await virtualNumberModel.find().select();
    res.status(200).json(afficherToutLesNumerosVirtuels);
  } catch (err) {
    // en cas d'echec, message d'erreur
    return res.status(500).json(err);
  }
};

/*
//petite logique pour crypter les mots de passes
const bcrypt = require("bcryptjs");
const password = "diel2019";
const saltRounds = 10;

bcrypt.genSalt(saltRounds, function (saltError, salt) {
  if (saltError) {
    throw saltError;
  } else {
    bcrypt.hash(password, salt, function (hashError, hash) {
      if (hashError) {
        throw hashError;
      } else {
        console.log(hash);
      }
    });
  }
});

//petite logique pour comparer les mots de passes
const bcryptt = require("bcrypt");
const passwordBdd =
  "$2a$10$hPZTkaG5CN7/hEKryk1Y5uuZ5svvtI2Fwkf1iMQqNC4ArEdw2GohW";
const passwordSaisi = "diel2019";
//on compare le mot de passe saisi et le mot de passe qui se trouve dans la bdd
const correctPassword = bcryptt.compareSync(passwordSaisi, passwordBdd);

if (correctPassword) {
  console.log("le mot de passe entrer est correct");
} else {
  console.log("le mot de passe entrer est incorrect");
}
*/
