import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    events: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);

//Mock Data
// {
//   "username":"Indira",
//   "email":"Indirakumarak@gmail.com",
//   "country":"India",
//   "img":"",
//   "city":"Bangalore",
//   "phone":"8300228399",
//   "password":"12345",
//   "isAdmin": True
//   }
