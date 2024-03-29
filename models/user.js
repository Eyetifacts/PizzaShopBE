const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const authService = require('../services/auth');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        allowNull: false,
        set(val) {
            this.setDataValue('password', authService.hashPassword(val));
        }
    },
    firstName: String,
    lastName: String,
    lastLoggedIn: {
        type: Timestamp,
        allowNull: false
    }
});

module.exports = mongoose.model('user', UserSchema);

// Favorite Orders / Previous Orders
// Favorite Store Location
// Make sure user doesn't use the same promo code twice
// Language selection
// Admin page / admin login