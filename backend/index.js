
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config.js')
const cors = require('cors');

const app = express()
const port = 3001

app.use(cors());
app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.json()); 
const { Client } = require('pg');
const USER_BD = process.env.USER_BD
const HOST = process.env.HOST
const DATABASE = process.env.DATABASE
const PASSWORD_BD = process.env.PASSWORD_BD
const PORT_CLIENT = process.env.PORT_CLIENT

const client = new Client({
    user: USER_BD,
    host: HOST,
    database: DATABASE,
    password: PASSWORD_BD,
    port: PORT_CLIENT,
  })
  
  client.connect()

app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.post('/fetchAllBeats', (req, res) => {
    console.log('ta')
    client.query(`SELECT * FROM beats`)
      .then(results => {
        var beats = results
        console.log(beats)
        return res.json({ "listBeats": beats });
      })
  })

app.post('/create',(req,res) => {
    console.log('oi')
    const name = req.body.name;
    const author = req.body.author;
    const linkImage = req.body.linkImage;
    const linkMusic = req.body.linkMusic;

    console.log(name,author,linkImage,linkMusic)

    client.query(`INSERT INTO beats (name,author,linkimage,linkmusic) VALUES ($1, $2, $3, $4)`, [name, author, linkImage, linkMusic])
    .then(results => {
      const resultado = results
      if (resultado.rowCount === 1) {
        return res.json({ "cadastrado": "musica cadastrada" });
      } else {
        return res.json({ "error": "Erro ao cadastrar" });
      }
    });

});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
