export const findAll = (req, res) => {
    try {
        res.status(200).send("Rota de produtos");
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
