const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Email = require('./models/emailModel');

const app = express();
const PORT = 8081;

//---------mongoose--------
mongoose.connect('mongodb://localhost:27017/emailsDB')
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });


//-------middleware-----------
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//----------rotas para renderizar páginas HTML------------
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../fontend/html_css/pagInicial.html'));
});

app.get('/plasma', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'frontend', 'html_css', 'plasma.html'));
});

app.get('/propulsao', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'frontend', 'html_css', 'propulsão.html'));
});

app.get('/aplicacoes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'frontend', 'html_css', 'aplicações.html'));
});

//------------rota para salvar email----------------
app.post('/save-email', async (req, res) => {
    const { email } = req.body;

    try {
        const newEmail = new Email({ email });
        await newEmail.save();
        res.status(201).send('Email salvo com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar email.');
    }
});

//-------------iniciar servidor--------------
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
