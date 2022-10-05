const mongoose = require('mongoose');



const adminSchema = new mongoose.Schema({
    FullName: {
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
    
},
    { timestamps: true }
);

const userSchema = new mongoose.Schema({

    FullName: {
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
    
},
    { timestamps: true }
);
const userTransferSchema = new mongoose.Schema({

    User_Email: {
        type: String,
        required: true,
    },
    Recipient_Email: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required : true,
    },
    
},

{ timestamps: true });

const userWithdrawSchema = new mongoose.Schema({

    User_Email: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required : true,
    },
    
})

const agentsSchema = new mongoose.Schema({

    FullName: {
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
    Local_Government: {
        type: String,
        required: true,
    }
    
},
    { timestamps: true }
);
const agentTransferSchema = new mongoose.Schema({

    Agent_Email: {
        type: String,
        required: true,
    },
    Recipient_Email: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required : true,
    },
    
},

{ timestamps: true });

const agentWithdrawSchema = new mongoose.Schema({

    Agent_Email: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required : true,
    },
    
},{ timestamps: true });

const trashingOrderSchema = new mongoose.Schema({

    User_Email: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Local_Government: {
        type: String,
        required: true,
    },
    Trash_KG: {
        type: String,
        required: true,
    },
    Agent_Email: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required: true,
    }
},{ timestamps: true });


const rewardSchema = new mongoose.Schema({

    Details: {
        type: String,
        required: true,
    },
    Amount: {
        type: String,
        required: true,
    },
    
},{ timestamps: true });





const users = mongoose.model('Users', userSchema);
const userTransfer = mongoose.model('UserTransfer', userTransferSchema);
const userWithdraw = mongoose.model('UserWithdraw' , userWithdrawSchema);
const agents = mongoose.model('Agents' , agentsSchema)
const agentTransfer = mongoose.model('AgentTransfer' , agentTransferSchema)
const agentWithdraw = mongoose.model('AgentWithdraw' , agentWithdrawSchema)
const trashingOrder = mongoose.model('TrashingOrder' , trashingOrderSchema)
const reward = mongoose.model('Reward' , rewardSchema)
const admin = mongoose.model('Admin', adminSchema);



module.exports = { userSchema, users, userTransferSchema, userTransfer, userWithdraw, userWithdrawSchema, agents, agentsSchema, agentTransfer , agentTransferSchema, agentWithdraw , agentWithdrawSchema, trashingOrder , trashingOrderSchema, reward , rewardSchema, admin , adminSchema}

