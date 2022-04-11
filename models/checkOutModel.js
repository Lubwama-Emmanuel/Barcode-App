const mongoose = require('mongoose')

const checkoutSchema = new mongoose.Schema({
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

const checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = checkout