const mongoose = require('mongoose');

var reportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Doc: String
} , { collection: 'Report' } );

var Report = mongoose.model('Report', reportSchema);

module.exports = Report;