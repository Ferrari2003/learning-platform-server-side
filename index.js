  const express = require('express')
  const app = express();
  const prot = process.env.PORT || 5000;


   const categories = require('./data/')

   app.get('/', (req, res) => {
       res.send('Details API Running')
   });
   

   app.listen(prot, () => {
       console.log('Programming data server running on port', prot);
   })