  const express = require('express')
  const app = express();
  const cors = require('cors')
  const prot = process.env.PORT || 5000;


   app.use(cors());

   const programming = require('./data/programming.json');
   
   app.get('/', (req, res) => {
       res.send('Details API Running')
   });
   
   app.get('/programming-data', (req, res) => {
       res.send(programming);
   })
   
   app.listen(prot, () => {
       console.log('Programming data server running on port', prot);
   })