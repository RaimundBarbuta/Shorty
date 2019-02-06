const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const randomatic = require('randomatic');
//#####Connect to mongo db######
mongoose.connect("mongodb://cubu:m1croc1p@ds231374.mlab.com:31374/shorty", { useNewUrlParser: true })
//#####Create a schema for the db#####
var Schema = mongoose.Schema;

var url = new Schema({
  urlID: String,
  url: String,
  shortUrl: String
});

var urlModel = mongoose.model('URL', url);

//#####Routes Handlers#####
//######## Gets the url ##########
router.get('/:urlID', function(req, res, next) {
  console.log(req.params.urlID);
  urlModel.findOne({urlID: req.params.urlID}, function(err, info){
    if(err){
      console.log(err);
      res.send(err);
    }else{
      console.log(info);
      // if (info != undefined){
        res.send(info.url);
      // } else {
        // res.send('Info is not defined');
      // }
      // console.log('GOT IT');
    }
  });
});

//#######Post a url#############
router.post('/', function(req, res, next) {
  var ids = randomatic('aA0', 4);
  console.log(ids);
  var urls  = new urlModel ({
    urlID: ids,
    url: req.body.url,
    shortUrl: 'http://46.101.9.7:3000/' + ids
  });
  urls.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.send('http://46.101.9.7:3000/' + ids);
    }
  });
});
//#######Post a url#############

module.exports = router;
