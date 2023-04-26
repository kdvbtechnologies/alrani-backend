const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    idAuteurNotification: {
      type: String,
    },

    nomAuteurNotification: {
      type: String,
    },

    notification: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
