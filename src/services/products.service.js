// Importa o modelo de produtos para interagir com o banco de dados
import Products from "../models/Products.js";

// Função para criar um novo produto
export const createService = (body) => Products.create(body);
// A função cria um novo produto no banco de dados usando os dados do corpo da requisição.


// Função para encontrar todos os produtos
export const findAllService = () => Products.find();
// A função busca todos os produtos no banco de dados e retorna.


// Função para encontrar um produto pelo ID
export const findByIdService = (id) => Products.findById(id);
// A função encontra um produto pelo seu ID no banco de dados e retorna.


// Função para atualizar um produto
export const updateProductService = (id, title, price) =>
    Products.findOneAndUpdate(
        { _id: id }, // Filtra pelo ID do produto
        { title, price }, // Atualiza os campos title e price
        { rawResult: true } // Retorna o resultado bruto da operação de atualização
    );

// Função para excluir um produto
export const ereaseService = (id) => Products.findOneAndDelete({ _id: id });
// A função exclui um produto com o ID fornecido.
