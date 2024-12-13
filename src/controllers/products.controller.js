import {
    createService,
    findAllService,
    findByIdService,
    updateProductService,
    ereaseService,
} from "../services/products.service.js";

export const findAll = async (req, res) => {
    try {
        const products = await findAllService();
        res.status(200).send({ products: products });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const findById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).send("O id não é válido");

    try {
        const product = await findByIdService(id);
        res.send(product);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const create = async (req, res) => {
    try {
        const { title, price } = req.body;

        if (!title || !price) {
            return res.status(400).send({
                message: "Preencha todos os campos necessários",
            });
        }

        await createService({ title, price });

        // Enviar resposta como JSON
        res.status(201).send({ message: "Produto criado com sucesso" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { title, price } = req.body;
        const { id } = req.params;

        if (!id || !title || !price) {
            return res
                .status(400)
                .send("Preencha todas as informações necesárias");
        }

        const product = await findByIdService(id);

        await updateProductService(id, title, price);

        res.send({ id, title, price });
    } catch (error) {
        res.send({ message: error.message });
    }
};

export const erease = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res
                .status(400)
                .send({ message: "Id do produto não informado" });
        }

        const product = await findByIdService(id);

        console.log(product);

        await ereaseService(id);

        res.send("Produto deletado com sucesso");
    } catch (error) {
        res.send(message.error);
    }
};
