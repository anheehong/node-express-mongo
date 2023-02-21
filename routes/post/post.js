var express = require('express');
var router = express.Router();

const Post = require('../../models/post');


router.get('/', function(req, res, next) {
  res.send("post");
});


router.get('/list', function(req, res, next) {
  Post.find( {} ).then( (data) =>{
      console.log( data )
      res.render( 'post/list', { data: data } );
  })
});

router.get('/create', function(req, res, next) {
  res.render( 'post/create' );
});

module.exports = router;
