let client = [
    {
      "id": 1,
      "nome": "João da Silva",
      "email": "joao.silva@email.com",
      "telefone": "5511987654321",
      "endereco": {
        "rua": "Avenida Brasil",
        "numero": "123",
        "bairro": "Centro",
        "cidade": "São Paulo",
        "estado": "SP",
        "cep": "01000-000"
      },
      "dataCadastro": "2024-09-03T10:00:00Z",
      "ativo": true
    },
    {
      "id": 2,
      "nome": "Maria Souza",
      "email": "maria.souza@email.com",
      "telefone": "5521912345678",
      "endereco": {
        "rua": "Rua das Palmeiras",
        "numero": "456",
        "bairro": "Jardim Botânico",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "cep": "22460-000"
      },
      "dataCadastro": "2024-09-02T15:30:00Z",
      "ativo": false
    }
  ];

  const findAllClient = () => {
    return client;
  }

  const findClientById = (id) => {
    return client.find(client => client.id === id);
  }

  const createClient = (newClient) => {
    const newId = client.length > 0 ? client[client.length - 1].id + 1 : 1;
    const clientWithId = {id: newId, ...newClient};
    client.push(clientWithId);
    return clientWithId;
  }

  const updateClient = (id, updateFields) =>{
      const atualizar = client.findIndex(client => client.id === id)
  
      client [atualizar] = {...client[atualizar], ...updateFields}
      return client[atualizar]
    }
  
    const deleteClient = (id) =>{
      const deletar = client.findIndex(client => client.id === id)
  
      const deleted = client[deletar];
      client.splice
      return deleted
    }

  module.exports = {
    findAllClient,
    findClientById,
    createClient,
    updateClient, 
    deleteClient
  }