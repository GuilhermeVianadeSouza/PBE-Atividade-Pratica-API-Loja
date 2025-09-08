const clientModel = require("../model/clientModel");

const getAllClient = (req, res) => {
    const client = clientModel.findAllClient();
    res.status(200).json(client);
}

const getClientById = (req, res) => {

    const id = parseInt(req.params.id);

    const client = clientModel.findClientById(id);

    if(client){
        res.status(200).json(client);
    } else {
        res.status(404).json({mensagem: 'Erro ao encontrar o cliente desejado, cliente não encontrado.'});
    }
}

const createClient = (req, res) => {

    const {nome, email, telefone, endereco, dataCadastro, ativo} = req.body;

    if (!nome || !email || !telefone || !endereco || !dataCadastro || ativo=== undefined
    ){
        return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'})
    } else {
        const newClient = clientModelModel.createClient({nome, email, telefone, endereco, dataCadastro, ativo});
        res.status(201).json(newClient);
    }
}

const updateClient = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedFields = req.body;

   const updated = clientModel.updateClient(id, updatedFields);
    res.status(200).json(updated);
}

const deleteClient = (req, res) => {
    const id = parseInt(req.params.id);
    const deleteInformation = req.body;

    const deleted = clientModelModel.deleteClient(id, deleteInformation)
    res.status(200).json({mensagem: 'Cliente deletado.'})
}

module.exports = {
    getAllClient,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}