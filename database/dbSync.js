const sequelize = require('./dbInit');
const User = require('./models/user_model');
const Comment = require('./models/comment_model');

async function syncToDB() {
    try {
        await sequelize.sync({force: false});
        console.log("Database Sync Successful!");
    }
    catch(error) {
        console.error("Error while syncing to DB ", error);
    }
}

module.exports = syncToDB();