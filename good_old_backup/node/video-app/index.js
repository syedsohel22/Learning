const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// Create Express app
const app = express();
app.use(express.json());
app.use(cors());
// Connect to MongoDB Atlas
const mongoURI = process.env.mongoURI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Failed to connect to MongoDB Atlas", err));

// Define Card schema
const cardSchema = new mongoose.Schema({
  name: String,
  link: String,
  bucket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bucket",
  },
});

const Card = mongoose.model("Card", cardSchema);

// Define Bucket schema
const bucketSchema = new mongoose.Schema({
  name: String,
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});

const Bucket = mongoose.model("Bucket", bucketSchema);

// Get all cards
app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find().populate("bucket");
    res.json(cards);
  } catch (err) {
    console.error("Failed to get cards", err);
    res.status(500).json({ error: "Failed to get cards" });
  }
});

// Create a new card
app.post("/cards", async (req, res) => {
  try {
    const { name, link, bucketId } = req.body;
    const card = await Card.create({ name, link, bucket: bucketId });
    const bucket = await Bucket.findById(bucketId);
    bucket.cards.push(card._id);
    await bucket.save();
    res.status(201).json(card);
  } catch (err) {
    console.error("Failed to create card", err);
    res.status(500).json({ error: "Failed to create card" });
  }
});

// Update a card
app.put("/cards/:cardId", async (req, res) => {
  try {
    const { name, link, bucketId } = req.body;
    const card = await Card.findByIdAndUpdate(
      req.params.cardId,
      { name, link, bucket: bucketId },
      { new: true }
    );
    res.json(card);
  } catch (err) {
    console.error("Failed to update card", err);
    res.status(500).json({ error: "Failed to update card" });
  }
});

// Delete a card
app.delete("/cards/:cardId", async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.cardId);
    const bucket = await Bucket.findById(card.bucket);
    bucket.cards.pull(card._id);
    await bucket.save();
    res.json({ message: "Card deleted successfully" });
  } catch (err) {
    console.error("Failed to delete card", err);
    res.status(500).json({ error: "Failed to delete card" });
  }
});

// Create a new bucket
app.post("/buckets", async (req, res) => {
  try {
    const { name } = req.body;
    const bucket = await Bucket.create({ name });
    res.status(201).json(bucket);
  } catch (err) {
    console.error("Failed to create bucket", err);
    res.status(500).json({ error: "Failed to create bucket" });
  }
});

// Move a card to another bucket
app.put("/cards/:cardId/move", async (req, res) => {
  try {
    const { bucketId } = req.body;
    const card = await Card.findById(req.params.cardId);
    const currentBucket = await Bucket.findById(card.bucket);
    const newBucket = await Bucket.findById(bucketId);

    currentBucket.cards.pull(card._id);
    newBucket.cards.push(card._id);

    card.bucket = bucketId;

    await Promise.all([currentBucket.save(), newBucket.save(), card.save()]);

    res.json(card);
  } catch (err) {
    console.error("Failed to move card", err);
    res.status(500).json({ error: "Failed to move card" });
  }
});

// Get history of played cards
app.get("/history", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    console.error("Failed to get history", err);
    res.status(500).json({ error: "Failed to get history" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
