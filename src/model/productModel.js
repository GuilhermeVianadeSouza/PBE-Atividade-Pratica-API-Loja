let product = [
    {
      "id": 1,
      "nome": "Notebook Dell Inspiron",
      "descricao": "Notebook 15.6 polegadas, Intel i5, 8GB RAM, 256GB SSD",
      "preco": 3500.00,
      "categoria": "Informática",
      "estoque": 12,
      "ativo": true
    },
    {
      "id": 2,
      "nome": "Smartphone Samsung Galaxy S22",
      "descricao": "Tela 6.1 polegadas, 128GB, câmera tripla",
      "preco": 4200.00,
      "categoria": "Celulares",
      "estoque": 8,
      "ativo": true
    },
    {
      "id": 3,
      "nome": "Cadeira Gamer Redragon",
      "descricao": "Cadeira ergonômica ajustável com apoio lombar",
      "preco": 1200.00,
      "categoria": "Móveis",
      "estoque": 5,
      "ativo": true
    },
    {
      "id": 4,
      "nome": "Fone de Ouvido JBL Tune 510BT",
      "descricao": "Fone Bluetooth on-ear com microfone",
      "preco": 280.00,
      "categoria": "Áudio",
      "estoque": 20,
      "ativo": true
    },
    {
      "id": 5,
      "nome": "Impressora Epson EcoTank L3250",
      "descricao": "Multifuncional com tanque de tinta e Wi-Fi",
      "preco": 950.00,
      "categoria": "Periféricos",
      "estoque": 7,
      "ativo": false
    }
  ]

  const findAll = () => {
    return product;
  }

  const findById = (id) =>{
    return product.find(product => product.id === id);
  }

  const createProduct = (newProduct) => {
    const newId = product.length > 0 ? product[product.length - 1].id + 1 : 1;
    const productWithId = {id: newId, ...newProduct};
    product.push(productWithId);
    return productWithId;
  }

  const updateProduct = (id, updateFields) =>{
    const atualizar = product.findIndex(product => product.id === id)

    product[atualizar] = {...product[atualizar], ...updateFields}
    return product[atualizar]
  }

  const deleteProduct = (id) =>{
    const deletar = product.findIndex(product => product.id === id)

    const deleted = product[deletar];
    product.splice
    return deleted
  }

  module.exports = {
    findAll,
    findById,
    createProduct,
    updateProduct,
    deleteProduct
  }