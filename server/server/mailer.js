/**
 * Created by mary on 5/16/16.
 */
//sendgrid
var path = require('path');

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var serverConfig = require(path.resolve('./serverConfig.js'));


// api key https://sendgrid.com/docs/Classroom/Send/api_keys.html
var options = {
    auth: {
         api_key: serverConfig.mailer.sendgridKey
    }
};

var mailer = nodemailer.createTransport(sgTransport(options));

module.exports = mailer;
