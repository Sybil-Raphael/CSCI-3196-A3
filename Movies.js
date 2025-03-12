const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if the connection fails (optional)
  }
};

connectDB();

// Movie schema
const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  releaseDate: { type: Number, min: [1900, 'Must be greater than 1899'], max: [2100, 'Must be less than 2100']},
  genre: {
    type: String,
    enum: [
      'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
    ],
  },
  actors: [{
    actorName: String,
    characterName: String,
  }],
});

module.exports = mongoose.model('Movie', MovieSchema);

const movies = [
  {
    title: "Deadpool & Wolverine",
    releaseDate: 2024,
    genre: "Action",
    actors: [
      { actorName: "Ryan Reynolds", characterName: "Wade Wilson / Deadpool" },
      { actorName: "Hugh Jackman", characterName: "Logan / Wolverine" }
    ]
  },
  {
    title: "Avatar: The Way of Water",
    releaseDate: 2022,
    genre: "Science Fiction",
    actors: [
      { actorName: "Sam Worthington", characterName: "Jake Sully" },
      { actorName: "Zoe Saldaña", characterName: "Neytiri" }
    ]
  },
  {
    title: "Avengers: Endgame",
    releaseDate: 2019,
    genre: "Action",
    actors: [
      { actorName: "Robert Downey Jr.", characterName: "Tony Stark / Iron Man" },
      { actorName: "Chris Evans", characterName: "Steve Rogers / Captain America" }
    ]
  },
  {
    title: "Gladiator 2",
    releaseDate: 2024,
    genre: "Action",
    actors: [
      { actorName: "Paul Mescal", characterName: "Lucius" },
      { actorName: "Denzel Washington", characterName: "TBA" }
    ]
  },
  {
    title: "Moana 2",
    releaseDate: 2024,
    genre: "Adventure",
    actors: [
      { actorName: "Auli'i Cravalho", characterName: "Moana" },
      { actorName: "Dwayne Johnson", characterName: "Maui" }
    ]
  }
];

