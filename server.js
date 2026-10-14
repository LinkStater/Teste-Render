const express = require('express');
const path = require('path');

const app = express();


// Configura o Express para servir todos os arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor ouvindo na porta correta
app.listen(3000, console.log("RUn!!!"));