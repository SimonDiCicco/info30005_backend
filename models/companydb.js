var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Int32 = require('mongoose-int32');
var companySchema = new Schema(

    {
        "CompanyName":String,
        "Description":String,
        "Username":String,
        "Password":String,
        "Jobs":Array,
        "Rating":Int32


    },{collection:'Companies'}


);

mongoose.model('companydb',companySchema);