var express = require('express');
var router = express.Router();
const Blog = require('../models/blog');
const Tag = require('../models/tag');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const arrayBlogs = await Blog.find();
    const dataTags = await Tag.find();
    res.render('index', { title: 'Noticias con MongoDB',blogs:arrayBlogs,tags:dataTags[0].tags });
  } catch(e){
    console.error("error obteniendo documentos",e);
    res.render('index', { title: 'Noticias con MongoDB',blogs:null });
  }
});
router.get('/blog/:slug', async function(req, res, next) {
  try{
    const arrayBlogs = await Blog.find();
    const content = await Blog.find({ slug: req.params.slug }).exec();
    const dataTags = await Tag.find();
    res.render('items', { title:content[0].titulo,blogs:arrayBlogs,contenido:content[0],tags:dataTags[0].tags });
  } catch(e){
    console.error("error obteniendo documentos",e);
    res.redirect("/");
  }
});
router.get('/tag/:slug', async function(req, res, next) {
  try{
    const arrayBlogs = await Blog.find({tag: req.params.slug}).exec();
    const dataTags = await Tag.find();
    res.render('tags.jade', { title: 'TAG: '+req.params.slug,blogs:arrayBlogs,tags:dataTags[0].tags });
  } catch(e){
    console.error("error obteniendo documentos",e);
    res.redirect("/");
  }
});

module.exports = router;
