import mongoose from "mongoose";
const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", EventSchema);

//Mock Data
// {
// "name":"",
// "fromDate":""
// "toDate":"",
// "latitude":"",
// "longitude":"",
// "country":"",
// "city":"",
// "capacity":""

// }
