const clientModel = require("../model/clientModel");

const getAllClient = (req, res) => {
    const client = clientModel.findAll();
    res.status(200).json(client);
}

const getClientById = (req, res) => {

    const id = parseInt(req.params.id);

    const client = clientModel.findById(id);

    if(client){
        res.status(200).json(client);
    } else {
        res.status(404).json({mensagem: 'Erro ao encontrar o cliente desejado, cliente não encontrado.'});
    }
}

const createClient = (req, res) => {

    const {nome, email, telefone, endereco, dataCadastro, ativo} = req.body;

    if (!nome || !email || !telefone || !endereco || !dataCadastro || ativo===
    ){
        return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
    } else {
        const newProduct = productModel.createProduct({nome, descricao, preco, categoria, estoque, ativo});
        res.status(201).json(newProduct);
    }
}

module.exports = {
    getAllProduct,
    getProductById,
    createProduct
}