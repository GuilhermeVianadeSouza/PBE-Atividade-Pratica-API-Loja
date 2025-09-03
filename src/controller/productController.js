
const productModel = require('../model/productModel');

const getAllProduct = (req, res) => {
    const product = productModel.findAll();
    res.status(200).json(product);
}

const getProductById = (req, res) => {

    const id = parseInt(req.params.id);

    const product = productModel.findById(id);

    if(product){
        res.status(200).json(product);
    } else {
        res.status(404).json({mensagem: 'Erro ao encontrar produto, produto não encontrado.'});
    }
}

const createProduct = (req, res) => {

    const {nome, descricao, preco, categoria, estoque, ativo} = req.body;

    if (
        nome === undefined ||
        descricao === undefined ||
        preco === undefined ||
        categoria === undefined ||
        estoque === undefined ||
        ativo === undefined
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
