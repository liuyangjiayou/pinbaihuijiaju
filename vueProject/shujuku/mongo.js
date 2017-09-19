let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/zfpx");
let PersonSchema = new mongoose.Schema({
  shouyeinfo:  Array,
});
let PersonModel = mongoose.model("shouye", PersonSchema);
module.exports = PersonModel;



