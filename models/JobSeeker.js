
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jobseekerSchema = new Schema(

    {

        "Firstname":String,
        "Lastname":String,
        "Username":String,
        "Password":String,
        "Experiences":String,
        "Interests": String
    },{collection:'JobSeeker'}


);

mongoose.model('JobSeeker',jobseekerSchema);