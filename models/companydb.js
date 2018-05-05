var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var companySchema = new Schema(

    {
        "CompanyName":String,
        "Description":String,
        "Jobs":Object
    },{collection:'Companies'}


);

mongoose.model('companydb',companySchema);