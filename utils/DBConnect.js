const mongoose = require("mongoose");

const DBConnect = () => {
  mongoose.connect(process.env.DB, () => {
    console.log("DB Connected Successfully");
  });
};

module.exports = DBConnect;
