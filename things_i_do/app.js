//README: index5 will create the template for my articles page.  

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// ********* Following block added from Atlas. This was working.
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://omarnaod:3yeDroplets@cluster0-zzysp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// *********************************************
// Following is from girl from Atlas support
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://omarnaod:3yeDroplets@cluster0-shard-00-00-zzysp.mongodb.net:27017,cluster0-shard-00-01-zzysp.mongodb.net:27017,cluster0-shard-00-02-zzysp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
//************************** */

// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '../..'));

mongoose.connect('mongodb+srv://omarnaod:3yeDroplets@cluster0-zzysp.mongodb.net/test?retryWrites=true&w=majority',
{ dbName: 'omar_database',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to DB');
}).catch(err => {
  console.log('ERROR:', err.message);
});

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Post = mongoose.model('Post', PostSchema);

const articleSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  link: String,
  imgLocation: String,
}, {collection: 'articles'});

const Article = mongoose.model('Article', articleSchema);

const article2 = new Article({_id: 002, name: 'Tips for Web Typography', link: 'https://medium.com/@omarshishanischool/tips-for-web-typography-6b904423464b', imgLocation: 'https://omarshishani.com/thumnbnails/typography_tips.png'});

app.get('/', async (req, res) => {
  article2.save(function (err, book) {
    if (err) return console.log(err);
    console.log('"' + book.name + '" saved to collection');
    res.send(article2);
  }); 
  // let article = await Article.find({}, function(err, profile){
  //   res.render('\index.html');
  // });
});

app.get('/articles3', (req, res) => {
  res.render('articles3.ejs');
});

app.get('/articles2', (req, res) => {
  // res.send('its working');
  let article = Article.find({}, function(err, articles){
    res.render('articles2.ejs', {articles: articles});
  });
});

app.get('/testtest', (req, res) => {
  res.send('test works');
});

// app.listen(3000, () => { 
//   console.log('Server is listening on port 3000') 
// });

const path = require('path');

app.get('/omarscontracting', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../public_html', 'contracting.html'))
});

app.listen(process.env.PORT || 3000 || 27016 || 27015 || 27017, process.env.IP, function(){
  console.log('Server is running on port 3000');
});