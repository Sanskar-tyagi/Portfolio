const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  message: String,
});
import MongoURI from "./private";
const UserTable = mongoose.model("User", userSchema);
const mongoURI = MongoURI;
app.use(express.json());
app.use(cors());
app.post("/Post", async (req, res) => {
  try {
    const UserData = req.body.UserData;

    // Find a user by email
    let user = await UserTable.findOne({ email: UserData.email });

    if (user) {
      // Update the user's data
      user.name = UserData.name || user.name;

      if (!user.message) {
        user.message = UserData.message;
      } else {
        user.message += "\n" + UserData.message; // Append new message
      }

      await user.save();

      res.send({ message: "User data updated successfully" });
    } else {
      // If no user found, create a new entry
      const newUser = new UserTable({
        email: UserData.email,
        name: UserData.name,
        message: UserData.message,
      });
      await newUser.save();

      res.send({ message: "New user added successfully" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Your DB is connected.");
    app.listen(5000, () => {
      console.log("Server served at 5000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });
