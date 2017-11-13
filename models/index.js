var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Default Title"
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "URL Default",
        
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "Lorem Ipsum Sic Dolor"
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
},  {getterMethods: {
    route() {
        return "wiki/" + this.urlTitle  
    }}
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "default username"
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,
        defaultValue: "user@email.com"
    }
});

module.exports = {
  Page: Page,
  User: User, 
  db: db
};