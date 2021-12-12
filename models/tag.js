const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
  tags:  Array,
});

const Tag = mongoose.model('Tag',tagSchema);
module.exports = Tag;