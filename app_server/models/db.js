const mongoose = require('mongoose');

const dbURI = 'mongodb://admin:1234@ds046667.mlab.com:46667/aarnikka';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connected to error:', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');