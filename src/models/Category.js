import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
class Category {
    initSchema() {
        const schema = new Schema({
            category_name: {
                type: String,
                required: true
            },
           
        }, { timestamps: true });
     
        schema.plugin(uniqueValidator);
        mongoose.model("categories", schema);
    
    }
    categoryInstance() {
        this.initSchema();
        return mongoose.model("categories");
    }

}
export default Category;