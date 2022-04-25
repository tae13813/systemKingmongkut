const mongoose = require('mongoose');

const collection = 'point';

const courseSchema = mongoose.Schema({
    idpoint:  { type: String, require: true },
   point: { type: String, require: true },
}, {
    timestamps: true,
    versionKey: false,
    collection
});

module.exports = mongoose.model(collection, adminSchema);