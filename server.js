var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var BlogPost = require('./api/blogPosts');

const port = process.env.PORT || 5000;
const app = express();
const router = express.Router();

mongoDB = 'mongodb://localhost/vandana-web';
mongoose.connect(mongoDB)
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });
mongoose.set('debug', true);

//prevent errors from Cross Origin Resource Sharing
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


router.get('/', function(req, res) {
	res.json({ message: 'API Initialized!' });
});

router.route('/posts')
  .get(function(req, res) {
    BlogPost.find(function(err, posts) {
      if (err)
        res.send(err);
      res.json(posts)
    });
  })
  .post(function(req, res) {
    var post = new BlogPost();
    post.author = req.body.author;
    post.title = req.body.title;
    post.text = req.body.text;

    post.save(function(err) {
      if(err)
        res.send(err)
      res.json({ message: 'Post successfully added!' });
    });
  });

app.use('/api', router);
app.listen(port, () => console.log(`Listening on port ${port}`));
