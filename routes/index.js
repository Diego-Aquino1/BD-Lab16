var express = require('express');
var router = express.Router();
const Blog = require('../models/blog');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const arrayBlogs = await Blog.find();
    res.render('index', { title: 'Blog MongoDB',blogs:arrayBlogs });
  } catch(e){
    console.error("error obteniendo documentos",e);
    res.render('index', { title: 'Blog MongoDB',blogs:null });
  }
  
});
router.get('/blog/:slug', async function(req, res, next) {
  try{
    const arrayBlogs = await Blog.find();
    const content = await Blog.find({ slug: req.params.slug }).exec();
    res.render('items', { title:content[0].titulo,blogs:arrayBlogs,contenido:content[0] });
  } catch(e){
    console.error("error obteniendo documentos",e);
    res.redirect("/");
  }
  
});

module.exports = router;
