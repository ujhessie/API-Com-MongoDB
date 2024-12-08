import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI não definido");
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Banco de dados conectado com sucesso");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
        process.exit(1);
    }
};

export default connectDatabase;
