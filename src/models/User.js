import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

// Define a User Schema
const userSchema = new mongoose.Schema({
    userCreated: {
      type: Date,
      default: Date.now
    },
    email: {
      type: String,
      trim: true,
      required: true
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    bundles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bundle' }]
  });

// Enable the passport-local-mongoose plugin on the User Schema
// The plugin adds username, hash, and salt properties to the Schema,
// along with defining some helpful auth-related methods on the User model
userSchema.plugin(passportLocalMongoose);

// Create a User Model from the above-defined Schema
const UserModel = mongoose.model("User", userSchema);

// Export the User model
export default UserModel;
