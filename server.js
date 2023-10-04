const express = require('express');
const app = express();
const port = 3000;
const cepRoutes = require('./src/routes/cep.js'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/', cepRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


// const fs = require('fs');

// const dados = fs.readFileSync('uf.json', 'utf8');
// const da = JSON.parse(dados);
// const uf = da.uf;
// if(uf === 'MG') {
//   //console.log(JSON.parse(dados));
//   console.log("é MG");
// } else {
//   console.log("Não é");
// }
