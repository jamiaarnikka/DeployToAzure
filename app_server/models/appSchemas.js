const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({number:String, name:String});
const methodSchema = new mongoose.Schema({number:String, name:String});

mongoose.model('brand', brandSchema);
mongoose.model('method', methodSchema);