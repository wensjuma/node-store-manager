import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
class Category {
    initSchema() {
        const schema = new Schema({
            category_name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            },
           
        }, { timestamps: true });
     
        schema.plugin(uniqueValidator);
        mongoose.model("categories", schema);
    
    }
    userInstance() {
        this.initSchema();
        return mongoose.model("categories");
    }

}
export default Category;