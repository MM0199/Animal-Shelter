import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2, 'Name must be at least 3 characters long'],
        maxLength: [50, 'Name must be at most 50 characters long']
    },
    breed: {
        type: String,
        required: [true, 'Breed is required'],
        trim: true,
        minLength: [3, 'Breed must be at least 3 characters long'],
        maxLength: [10, 'Breed must be at most 10 characters long']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
    },
    weight: {
        type: Number,
        required: [true, 'Weight is required'],
    },
    color: {
        type: String,
        required: [true, 'Color is required'],
        trim: true,
        minLength: [3, 'Color must be at least 3 characters long'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        minLength: [3, 'Description must be at least 3 characters long'],
    },
    imageUrl: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        trim: true,
        minLength: [3, 'Location must be at least 3 characters long'],
    },
    status: {
        type: String,
        enum: ['available', 'adopted'],
        default: 'available',
    },
    neuter: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model('Animal', animalSchema);