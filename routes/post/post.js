var express = require('express');
var router = express.Router();

const Post = require('../../models/post');

router.get('/list', function(req, res, next) {
  Post.find( {} ).then( (data) =>{
      res.render( 'post/list', { data: data } );
    })
    .catch(err => res.status(500).send(err));
});

router.get('/create', function(req, res, next) {
  res.render( 'post/create' );
});

router.get('/postid/:postid', (req, res) => {
  Post.findOne( { id : req.params.postid } ).then((post) => {
      if (!post) return res.status(404).send({ err: 'Post not found' });
      res.render( 'post/postid', { data: post } );
    })
    .catch(err => res.status(500).send(err));
});

router.post('/create', function(req, res, next) {
  Post.create(req.body).then(post => {
      res.redirect('list') 
    })
    .catch(err => res.status(500).send(err));
});

router.put('/postid/:postid', (req, res) => {
  const postid = req.params.postid
  Todo.findOneAndUpdate( { postid }, req.params, { new: true } ).then( data => {
      res.send(data)
    })
    .catch(err => res.status(500).send(err));
});

router.delete('/postid/:postid', (req, res) => {
  const postid = req.params.postid
  Todo.remove( {postid}).then((data) => {
      res.sendStatus(200)
    })
    .catch(err => res.status(500).send(err));
});


module.exports = router;
