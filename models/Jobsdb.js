
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jobsSchema = new Schema(

    {
        "title":String,
        "company":String,
        "description":String,
        "applicants":Array
    },
    {collection:'Jobs'}


);

mongoose.model('Jobsdb',jobsSchema);



