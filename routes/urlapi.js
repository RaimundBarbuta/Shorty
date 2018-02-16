var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var randomatic = require('randomatic');
//#####Connect to mongo db######
mongoose.connect('mongodb://cubu:mancarica@ds235388.mlab.com:35388/blogbd')
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
      console.log(url);
      res.redirect(info.url);
      console.log('GOT IT');
    }
  });
});

//#######Post a url#############
router.post('/', function(req, res, next) {

  var ids = randomatic('aA0', 8);
  var urls  = new urlModel ({
    urlID: ids,
    url: req.body.url,
    shortUrl: 'http://188.166.172.54:3000/' + ids
  });
  urls.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.send('http://188.166.172.54:3000/' + ids);
    }
  });
});

module.exports = router;
