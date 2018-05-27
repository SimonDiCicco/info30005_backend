/***************************************************/
const express = require('express');


var bodyParser = require('body-parser');
const app = express();
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Set View engine
app.set('view engine','ejs');

//Heroku server port
const PORT = process.env.PORT || 3000;
const router = require('./routes/routes');
const controller = require('./Controllers/controller');
var fs = require('fs');
var multer = require('multer');
var base64 = require('base-64');

/*******************************************************************/

app.use(router);






app.listen(PORT,function(){
    console.log('server started');

});


//Uploading Images
//Reading and uploading an image file
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}




require('./models/db');