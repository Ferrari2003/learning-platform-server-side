  const express = require('express')
  const app = express();
  const cors = require('cors')
  const prot = process.env.PORT || 5000;


   app.use(cors());

   const programming = require('./data/programming.json');
   const detail = require('./data/details.json');
   
   app.get('/', (req, res) => {
       res.send('Details API Running')
   });
   
   app.get('/programming-data', (req, res) => {
       res.send(programming);
   })

   app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id === '08') {
        res.send(detail)
    }
    else{
        const category_news = detail.filter(d => d.category_id === id);
        res.send(category_news)
    }
   
   })
   
   app.get('/detail/:id', (req, res) => {
    const id = req.params.id;
   const selectedDetail = detail.find(d => d._id === id);
   res.send(selectedDetail);
   })

   app.listen(prot, () => {
       console.log('Programming data server running on port', prot);
   })