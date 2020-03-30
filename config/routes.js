import PostController from './../src/controllers/postController';
import userController from '../src/controllers/userController';
import Auth from './../src/auth/controllers/auth.controller'
import CategoryController from '../src/controllers/categoryController';
import ProductController from '../src/controllers/productController';

export default (server) => {

  // POST ROUTES
  server.get('/api/post', PostController.getAll);
  // server.get('/api/post/:params', PostController.get);
  server.post('/api/post', PostController.insert)
  server.put('/api/post/:id', PostController.update);
  server.delete('/api/post/:id', PostController.delete);

  //CATEGORY ROUTES
  server.get('/api/category', CategoryController.getAll);
  server.get('/api/category/:id', CategoryController.get);
  server.post('/api/category', CategoryController.insert)
  server.put('/api/category/:id', CategoryController.update);
  server.delete('/api/category/:id', CategoryController.delete);

  //PRODUCTS ROUTES
  server.get('/api/product', ProductController.getAll);
  server.get('/api/post/:params', ProductController.get);
  server.post('/api/product', ProductController.insert)
  server.put('/api/product/:id', ProductController.update);
  server.delete('/api/product/:id', ProductController.delete);

  //USER ROUTES
  server.get('/api/users', userController.getAll)
  server.post('/api/users', userController.insert)
  // server.post('/api/user', userController.createUser)
//   server.post('/auth/login', [
//     // verifyUser.hasAuthValidFields,
//     // verifyUser.isPasswordAndUserMatch,
//     authController.login
// ]);
  // server.post('/api/login', Auth.login)
}