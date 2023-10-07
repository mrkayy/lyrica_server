let mongoose = require('../connection.js');
const mongoosePaginate = require('mongoose-paginate-v2');
const idValidator = require('mongoose-id-validator');

const modelCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'data',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator',
};
mongoosePaginate.paginate.options = { customLabels: modelCustomLabels };
const Schema = mongoose.Schema;
const schema = new Schema({
  title: {
    type:String,
    required:true,
    unique:false,
    lowercase:false,
    trim:false,
    uniqueCaseInsensitive:true
  },
  description: { type:String },
  author: {
    lowercase:false,
    trim:false,
    unique:false,
    type:String,
    required:true,
    uniqueCaseInsensitive:true
  },
  ref_link: { type:String },
  uploaded_by: {
    type:Schema.Types.ObjectId,
    ref:'user',
    required:true,
    unique:false
  },
  updatedBy: {
    type:Schema.Types.ObjectId,
    ref:'user'
  },
  isActive: { type:Boolean },
  createdAt: { type:Date },
  updatedAt: { type:Date },
  isDeleted: { type:Boolean },
  download_url: { type:String }
}
,{ 
  timestamps: { 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt' 
  } 
}
);
schema.pre('save', async function (next) {
  this.isDeleted = false;
  this.isActive = true;
  next();
});
schema.pre('insertMany', async function (next, docs) {
  if (docs && docs.length){
    for (let index = 0; index < docs.length; index++) {
      const element = docs[index];
      element.isDeleted = false;
      element.isActive = true;
    }
  }
  next();
});

schema.method('toJSON', function () {
  const {
    _id, __v, ...object 
  } = this.toObject({ virtuals: true });
  object.id = _id;
  return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);

const Lyric = mongoose.model('Lyric',schema);
module.exports = Lyric;
