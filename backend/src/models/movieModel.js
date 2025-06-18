import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Assistido", "Quero Assistir"],
      required: true,
    },
    liked: {
      type: Boolean,
	  default: null,
    },
    genres: {
      type: [String],
      default: [],
    },
    streamingService: {
      type: String,
    },
    duration: {
      type: String,
    },
    director: String,
    releaseYear: Number,
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;


