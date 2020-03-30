import Controller from  './globalController';
import PostService from  "./../services/postsService";
import Post from  "./../models/post";
const postService = new PostService(
  new Post().getInstance()
);

class PostController extends Controller {

  constructor(service) {
    super(service);
  }
  

}

export default new PostController(postService);
