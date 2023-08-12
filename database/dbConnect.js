const sequelize = require('./dbInit');

async function connectToDB() {
    try {
        await sequelize.authenticate();
        console.log("Connection Established Successfully!");
    }
    catch(error) {
        console.error("Error while creating DB con", error);
    }
}

module.exports = connectToDB();