const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
    site_name: {
        type: String
    },
    site_logo: {
        type: String
    },
    site_primary_color: {
        type: String
    },
    site_secondary_color: {
        type: String
    }, 
    app_name: {
        type: String
    },
    app_logo:{
        type: String
    },
    app_primary_color: {
        type: String
    },
    app_secondary_color: {
        type: String
    },
    default_welcome_email: {
        type: String
    },
    default_secondary_color: {
        type: String
    },
    default_timezone: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: String
    },
    updated_by_user_id: {
        type: String
    }
})

const AdminSettings = mongoose.model('AdminSettings', settingSchema)

module.exports = AdminSettings;