const mongoose = require('mongoose')

const VotingRuleSchema = new mongoose.Schema({
    'id': {
        type: Number,
        required: true,
        default: [new Date()]
    },
    'tags': {
        type: String,
        required: true
    },
    "date_added": {
        type: [Date],
        default: [new Date()]
    },
    "contributeur": {
        type: [String],
        required: true
    },
    "isValidated": {
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model('VotingRule', VotingRuleSchema)