import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
class User {
    initSchema() {
        const schema = new Schema({
            username: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: false
            },
            password: {
                type: String,
                required: true
            },
        }, { timestamps: true });
        // schema.pre("save", function (next) {
        //     let post = this;
        //     if (!post.isModified("username")) {
        //         return next();
        //     }
        //     post.slug = slugify(post.username, "_");
        //    // console.log('set slug', post.slug);
        //     return next();
        // },
        //     function (err) {
        //         next(err);
        //     }
        // );
        schema.plugin(uniqueValidator);
        mongoose.model("users", schema);
    
    }
    userInstance() {
        this.initSchema();
        return mongoose.model("users");
    }

}
export default User;