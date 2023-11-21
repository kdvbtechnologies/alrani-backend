const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
	  // Owner - c'est celui qui envoie la notification
    idOwner: {
      type: String,
    },
	
	  nameOwner: {
      type: String,
    },
	
	  photoOwner: {
      type: String,
    },
	
	  badgeOwner: {
      type: String,
    },
	
	  oldBalanceOwner: { // old balance sender (ancien solde de l'envoyeur)
      type: String,
    },
	
	  newBalanceOwner: { // new balance sender (nouveau solde de l'envoyeur)
      type: String,
    },

    // Other - c'est celui qui recoit la notification
    idOther: {
      type: String,
    },
	
	  nameOther: {
      type: String,
    },
	
	  photoOther: {
      type: String,
    },
	
	  badgeOther: {
      type: String,
    },
	
	  oldBalanceOther: { // old balance receiver (ancien solde du beneficiaire)
      type: String,
    },
	
	  newBalanceOther: { // new balance receiver (nouveau solde du beneficiaire)
      type: String,
    },
	
	  // autres details
	  amount: { // montant envoyé, montant de l'identification, prix d'activation d'un outil, ...
      type: String,
    },
	
	  fees: { // frais de transfert, frais de recharge, frais de retrait, ...
      type: String,
    },
	
	  total: { // total
      type: String,
    },
	
	  description: { // la personne qui envoie de l'argent peut ajouter une reference pour mieux se retrouver dans l'historique par exemple Transfert d'argent pour acheter le riz - Amesia, ou Envoie d'argent à Ronisia pour le transport du Mois de Mai, Transfert d'argent Billet d'avion Turquie Veil B
      type: String,
    },

    notification: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Izocash 1 - Notifications", NotificationSchema);
