const mongoose = require('mongoose');

const collection = 'user';

const userSchema = mongoose.Schema({
    id:  { type: String, require: true },
    idStd: { type: String, require: true },
    name:  { type: String, require: true },
    branch: { type: String, require: true },
}, {
    timestamps: true,
    versionKey: false,
    collection
});

module.exports = mongoose.model(collection, userSchema);