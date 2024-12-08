import Products from "../models/Products.js";

export const createService = (body) => Products.create(body);

export const findAllService = () => Products.find();

export const findByIdService = (id) => Products.findById(id);

export const updateProductService = (id, title, price) =>
    Products.findOneAndUpdate(
        { _id: id },
        { title, price },
        { rawResult: true }
    );

export const ereaseService = (id) => Products.findOneAndDelete({ _id: id });
