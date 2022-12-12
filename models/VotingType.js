const mongoose = require('mongoose')

const VotingTypeSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    "date_added": {
        type: [Date],
        default: [new Date()]
    },
    "priority": {
        type: Number,
        required: true
    },
    "parameter": {
        type: [String],
        required: true
    },
    "content": {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('VotingType', VotingTypeSchema)