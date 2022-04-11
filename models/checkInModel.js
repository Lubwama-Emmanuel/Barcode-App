const mongoose = require('mongoose')

const checkinSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated_by_admin_id: {
        type: String
    },
})

const Checkin = mongoose.model('CHeckin', checkinSchema);

module.exports = Checkin