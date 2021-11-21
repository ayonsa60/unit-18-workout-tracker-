const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    }, 
    exercises: {
        type: {
            type: String,
            trim: true,
            required: "Which exercise would you like?"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter exercise duration"
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    }
});
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

