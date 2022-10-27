  const express = require('express')
  const app = express();
  var cors = require('cors')
  const prot = process.env.PORT || 5000;

  app.use(cors())


   const categories = require('./data/course.json')

   app.get('/', (req, res) => {
       res.send('Details API Running')
   });
   
   app.get('/details-categories', (req, res) => {
    res.send(categories)
   })

   app.listen(prot, () => {
       console.log('Programming data server running on port', prot);
   })