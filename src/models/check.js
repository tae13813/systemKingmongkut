const mongoose = require('mongoose');

const collection = 'check';

const checkSchema = mongoose.Schema({
    idStd:{ type: String, require: true },
    idCourse:  { type: String, require: true },
    check:{type: String, require: true },
}, {
    timestamps: true,
    versionKey: false,
    collection
});

module.exports = mongoose.model(collection, checkSchema);