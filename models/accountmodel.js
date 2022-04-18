const mongoose = require('mongoose');
const accountSchema = mongoose.Schema({
    amount: {
        
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    isExpense:{
        type: Boolean,
        default: true
    },
    createdDate:{
        type: Date,
        default: new Date()
    },
    updatedDate:{
        type: Date,
        default: new Date()
    }

})
const account = mongoose.model('account',accountSchema)
module.exports = account