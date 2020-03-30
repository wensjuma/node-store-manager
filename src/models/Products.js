import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class Products {

    initSchema() {
        const schema = new Schema({
            product_name: {
                type: String,
                required: true,
            },
           
            description: {
                type: String,
                required: false,
            },
           
        }, { timestamps: true });
        schema.pre("save", function (next) {
            let post = this;
            if (!post.isModified("product_name")) {
                return next();
            }
            post.slug = slugify(post.product_name, "_");
           // console.log('set slug', post.slug);
            return next();
        },
            function (err) {
                next(err);
            }
        );
        schema.plugin(uniqueValidator);
        mongoose.model("products", schema);
    }

    getProdInstance() {
        this.initSchema();
        return mongoose.model("products");
    }
}

export default Products;
