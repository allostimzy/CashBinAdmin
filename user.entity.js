const mongoose = require('mongoose');



const adminSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    PhoneNo: {
        type: Number,
        required: true,
    },
    Address: {
        type: String,
    },
    Gender: {
        type: String,
        Gender: ['Male','Female'],
    },
    Password: {
        type: String,
        required: true,
    },
    
})

const userSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    PhoneNo: {
        type: Number,
        required: true,
    },
    Address: {
        type: String,
    },
    Gender: {
        type: String,
        Gender: ['Male','Female'],
    },
    
})
const userTransferSchema = new mongoose.Schema({

    User_PhoneNo: {
        type: Number,
        required: true,
    },
    Recipient_PhoneNo: {
        type: Number,
        required: true,
    },
    Amount: {
        type: Number,
        required : true,
    },
    
})
const userWithdrawSchema = new mongoose.Schema({

    User_PhoneNo: {
        type: Number,
        required: true,
    },
    Amount: {
        type: Number,
        required : true,
    },
    
})

const agentsSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    PhoneNo: {
        type: Number,
        required: true,
    },
    Address: {
        type: String,
    },
    Gender: {
        type: String,
        Gender: ['Male','Female'],
    },
    
})
const agentTransferSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    
})

const agentWithdrawSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    
})

const trashingHistorySchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    
})
const rewardSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    
})





const users = mongoose.model('Users', userSchema);
const userTransfer = mongoose.model('UserTransfer', userTransferSchema);
const userWithdraw = mongoose.model('UserWithdraw' , userWithdrawSchema);
const agents = mongoose.model('Agents' , agentsSchema)
const agentTransfer = mongoose.model('AgentTransfer' , agentTransferSchema)
const agentWithdraw = mongoose.model('AgentWithdraw' , agentWithdrawSchema)
const trashingHistory = mongoose.model('TrashingHistory' , trashingHistorySchema)
const reward = mongoose.model('Reward' , rewardSchema)
const admin = mongoose.model('Admin', adminSchema);



module.exports = { userSchema, users, userTransferSchema, userTransfer, userWithdraw, userWithdrawSchema, agents, agentsSchema, agentTransfer , agentTransferSchema, agentWithdraw , agentWithdrawSchema, trashingHistory , trashingHistorySchema, reward , rewardSchema, admin , adminSchema}

