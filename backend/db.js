const mongoose = require("mongoose");

const uri = "mongodb+srv://tsmnct13:<password>@cluster0.vu2yxcj.mongodb.net/kasha?retryWrites=true"

module.exports.connect = () => {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };
