const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  titulo:  String,
  descripcion: String,
  contenido: String,
  slug: String,
  autor: String,
  img: String,
});

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;