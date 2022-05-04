const mongoose = require('mongoose');

const collection = 'point';

const pointSchema = mongoose.Schema({
     idStd: { type: String, require: true },
     idCourse:  { type: String, require: true },
     point: { type: String, require: true },
     Date: { type: Date, require: true },
}, {
    timestamps: true,
    versionKey: false,
    collection
});

module.exports = mongoose.model(collection, pointSchema);