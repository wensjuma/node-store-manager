import Controller from  './globalController';
import CategoryService from  "./../services/categoryService";
import Category from './../models/Category';
const catService = new CategoryService(
  new Category().categoryInstance()
);

class CategoryController extends Controller {

  constructor(service) {
    super(service);
  }
  

}

export default new CategoryController(catService);
