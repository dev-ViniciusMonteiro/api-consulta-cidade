const fs = require("fs");

// consulto via cep
// vejo o estado que retorna
// Vejo se esse estado esta no meu arquivo
//Sim: Retorna status 200, os dados do via cep
//Não: Retorna 500 (Deu algum erro) ou 404 (Não contem no json)

const dados = fs.readFileSync("uf.json", "utf8");
console.log(JSON.parse(dados));
