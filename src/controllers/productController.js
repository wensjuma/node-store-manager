import Controller from  './globalController';
import ProductService from  "./../services/productService";
import Product from  "./../models/Products";
const productService = new ProductService(
  new Product().getProdInstance()
);

class ProductController extends Controller {

  constructor(service) {
    super(service);
  }
  

}

export default new ProductController(productService);
