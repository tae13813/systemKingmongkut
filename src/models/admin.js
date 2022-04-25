const mongoose = require('mongoose');

const collection = 'admin';

const adminSchema = mongoose.Schema({
    id:  { type: String, require: true },
    password: { type: String, require: true },
}, {
    timestamps: true,
    versionKey: false,
    collection
});

module.exports = mongoose.model(collection, adminSchema);