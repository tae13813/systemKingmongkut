const mongoose = require('mongoose');

const collection = 'course';

const courseSchema = mongoose.Schema({
    idCourse:  { type: String, require: true },
    course: { type: String, require: true },
}, {
    timestamps: true,
    versionKey: false,
    collection
});

module.exports = mongoose.model(collection, adminSchema);