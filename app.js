/***************************************************/
const express = require('express');
const app = express();


const router = require('./routes/routes');
//Set View engine
app.set('view engine','ejs');
app.use(express.static('public'));
//Heroku server port
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
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