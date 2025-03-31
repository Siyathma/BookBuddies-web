import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    ownerId: {
        type: Number,
        required: true
      },
    bookName: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Fiction', 'Non-fiction', 'Fantasy', 'Science', 'History', 'Mystery']
  },
  
}, { timestamps: true });

const BookModel = model('Books', bookSchema);

export { BookModel };
