const AdminJS = require('adminjs');
const AdminJSMongoose = require('@adminjs/mongoose');


AdminJS.registerAdapter(AdminJSMongoose);



const { users ,userTransfer , userWithdraw , agents , agentTransfer, agentWithdraw, trashingOrder, reward, admin } = require('./user.entity');



const options  =  {
    resources : [users, userTransfer, userWithdraw, agents, agentTransfer, agentWithdraw, trashingOrder, reward, admin],
    branding : {
        logo: 'https://i.ibb.co/St3vyz7/CashBin.png',
        companyName: 'CashBin',
        theme: {
            colors: {
                primary100: '#39561A',
                primary80: '#ffffff',
                primary60: '#39561A',
                primary20: '#ffffff',
                filterBg: '#7ea174',
                filterInputBorder: '#ffffff',
                border: '#ffffff',
                hoverBg: '#39561A',
                love: '#39561A',
                accent: '#fff',
            },
            font: '\'Poppins\', sans-serif',
            borders: {
                bg: '2px solid #39561A',
            },
        },
        favicon : 'https://i.ibb.co/gvmP5yC/money-rotation.png',
        
    },
    

};


module.exports = options;
