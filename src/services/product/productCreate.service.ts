import { AppDataSource } from './../../data-source';
import { IProductCreate } from './../../interfaces/product/index';
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const productCreateService = async ({
    name,
    description,
    price,
}: IProductCreate) => {
    const productRepository = AppDataSource.getRepository(Product);

    const productAlreadyExists = await productRepository.findOne({
        where: { name },
    });

    if (productAlreadyExists) {
        throw new AppError(409, "Product Already Registered");        
    }

    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;

    productRepository.create(product);
    productRepository.save(product);

    return product;
};

export default productCreateService;