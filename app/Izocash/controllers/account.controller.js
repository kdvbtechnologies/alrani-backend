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
      { folder: "Izocash 1 - Photos" },
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


// a l'inscription    
    /*
    photoProfile, 
    balanceNationalAccount, 
    balanceInternationalAccount, 
    stockNational, 
    stockInternational */


// update infos
// update infos
// cette logique permet de mettre a jour les infos de l'utilisateur
/*module.exports.updateInfos = async (req, res) => {
  // on verifie si l'id envoyer dans la requete existe dans la bdd
  // si l'id n'existe pas, on envoie ce message d'erreur
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    nameUser,
    virtualNumber,
    password,
	
	photoProfile,
	/*
	adresse,
    dateNaissance,
    sexeMasculin,
    sexeFeminin,
    nomMere,
    occupationEntrepreneur,
    occupationTravailleur,
    occupationEtudiant,
    valeurOccupationEntrepreneur,
    valeurOccupationTravailleur,
    valeurOccupationEtudiant,
    valeurOccupationChomeur,
	//fermer
	
	identification,
    codeOperation,
    codePin,
    paymentMethod,
	
    nameIdentification,
    addressIdentification,
    phoneNumberIdentification,
	
    country,
    city,
    quarter,
    zone,
    
    agency,
    nameAgency,
    countryAgency,
    cityAgency,
    quarterAgency,
    zoneAgency,
    addressAgency,

    // solde compte national, solde compte international
    // il s'agit du compte izocash national et du compte izocash international
    balanceNationalAccount,
    balanceInternationalAccount,

    // stock national, stock international
    // il s'agit du stock izocash national et du stock izocash international
    stockNational,
    stockInternational,
	
    // LicenseMini, LicensePlus, LicensePlusPlus 
    // il s'agit de la LicenseMini, License+, License++
    licensePlusPlus,
    licensePlus,
    licenseMini,

    // izocash numero virtuel
    balanceIzocashVirtualNumber,

    // identification - izocash identification
    balanceIdentificationDeals,
    balanceIdentificationFormation,

    // plus - izocash plus
    balancePlusDeals,
    balancePlusFormation,

    // licence mini - izocash licence mini
    balanceLicenceMiniDeals,
    balanceLicenceMiniFormation,

    // licence light - izocash licence light
    balanceLicenceLightDeals,
    balanceLicenceLightFormation,

    // izocash buy
    balanceIzocashBuy,
    superCodeIzocashBuy,
    percentageCommissionIzocashBuy,
  } = req.body;

  try {
    const user = await userModel.findById(req.params.id);
    if (user.userId === req.body.userId) {
      // updateOne est une fonction de mongodb pour modifier les donnees de 1 utilisateur
      await user.updateOne({
        nameUser,
        virtualNumber,
        password,
		
		photoProfile,
		
		/*
		adresse,
        dateNaissance,
        sexeMasculin,
        sexeFeminin,
        nomMere,
        occupationEntrepreneur,
        occupationTravailleur,
        occupationEtudiant,
        valeurOccupationEntrepreneur,
        valeurOccupationTravailleur,
        valeurOccupationEtudiant,
        valeurOccupationChomeur,
		//fermer
		
		codeOperation,
		codePin,
		paymentMethod,
		
		identification,
		nameIdentification,
		addressIdentification,
		phoneNumberIdentification,
		
		country,
		city,
		quarter,
		zone,
		
		agency,
		nameAgency,
		countryAgency,
		cityAgency,
		quarterAgency,
		zoneAgency,
		addressAgency,

        // solde compte national, solde compte international
        // il s'agit du compte izocash national et du compte izocash international
        balanceNationalAccount,
        balanceInternationalAccount,

        // stock national, stock international
        // il s'agit du stock izocash national et du stock izocash international
        stockNational,
        stockInternational,
		
        // LicenseMini, LicensePlus, LicensePlusPlus 
        // il s'agit de la LicenseMini, License+, License++
        licensePlusPlus,
        licensePlus,
        licenseMini,

        // izocash numero virtuel
        balanceIzocashVirtualNumber,

        // identification - izocash identification
        balanceIdentificationDeals,
        balanceIdentificationFormation,

        // plus - izocash plus
        balancePlusDeals,
        balancePlusFormation,

        // licence mini - izocash licence mini
        balanceLicenceMiniDeals,
        balanceLicenceMiniFormation,

        // licence light - izocash licence light
        balanceLicenceLightDeals,
        balanceLicenceLightFormation,

        // izocash buy
        balanceIzocashBuy,
        superCodeIzocashBuy,
        percentageCommissionIzocashBuy,
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
// update infos
*/
