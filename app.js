
const express = require('express');
// const functions = require('firebase-functions');
// const bodyParser = require('body-parser');
// const axios = require('axios');
const app = express();
// const cors = require('cors');



app.use(express.static('public'));


app.get('/', (req, res) => {
    console.log('we are in here')

      res.sendFile(__dirname+'/newHtml.html')
  });
  
  
  // exports.api = functions.https.onRequest(app);
  app.listen(3000,console.log('we are listening on 3000'));