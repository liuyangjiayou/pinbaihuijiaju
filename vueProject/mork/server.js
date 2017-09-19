let  express = require('express');
let app = express();
let PersonModel = require('../shujuku/mongo.js');

app.get('/',function (req,res) {
  PersonModel.find({},function (err,doc) {
    res.send(doc)
  })
});
app.listen(4040,function () {
  console.log('链接成功');
});
