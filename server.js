const express = require('express');

const productRoutes = require('./src/routes/productRoutes');

const app = express();

app.use(express.json());

const porta = 8000;

app.get ('/', (req, res) =>{
    res.send("API de Produtos está funcionando");
})

app.use('/api/product', productRoutes);

app.listen(porta, ()=>{
    console.log(`Servidor ta rodando padrão em http://localhost:${porta}`)
})