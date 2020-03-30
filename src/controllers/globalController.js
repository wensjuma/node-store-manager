const bcrypt = require('bcrypt');
class Controller {
    constructor(service) {
      this.service = service;
      this.getAll = this.getAll.bind(this);
      this.get = this.get.bind(this);
      this.insert = this.insert.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
    }
    async getAll(req, res) {
      //console.log(await this.service.getAll(req.query));
      return res.status(200).send(await this.service.getAll(req.query));
     
      
    }
    async get(req, res){
      const {id} =req.params;
      let singleData =  await this.service.get(id)
      return res.status(singleData.statusCode).send(singleData)

    }
    async insert(req, res) {
      let response = await this.service.insert(req.body);
      const salt = await bcrypt.genSalt(20);
      // req.body.password = await bcrypt.hash(req.body.password, salt)
      // console.log('====================================');
      // console.log(req.body.password);
      // console.log('====================================');
      // console.log(await bcrypt(req.body.password, salt))
      if (response.error) return res.status(response.statusCode).send(response);
      return res.status(201).send(response);
    }
  
    async update(req, res) {
      const { id } = req.params;
  
      let response = await this.service.update(id, req.body);
  
      return res.status(response.statusCode).send(response);
    }
  
    async delete(req, res) {
      const { id } = req.params;
  
      let response = await this.service.delete(id);
  
      return res.status(response.statusCode).send(response);
    }
  
  }
  
  export default Controller;