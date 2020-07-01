const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    StaffID: String
} , { collection: 'Account' } );

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;