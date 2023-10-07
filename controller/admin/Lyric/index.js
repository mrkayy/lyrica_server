const LyricDb = require('../../../data-access/LyricDb');

const LyricSchema = require('../../../validation/schema/Lyric');

const createValidation = require('../../../validation')(LyricSchema.createSchema);
const updateValidation = require('../../../validation')(LyricSchema.updateSchema);
const filterValidation = require('../../../validation')(LyricSchema.filterValidationSchema);
const addLyricUsecase = require('../../../use-case/Lyric/addLyric')({
  LyricDb,
  createValidation 
});
const findAllLyricUsecase = require('../../../use-case/Lyric/findAllLyric')({
  LyricDb,
  filterValidation
});
const getLyricCountUsecase = require('../../../use-case/Lyric/getLyricCount')({
  LyricDb,
  filterValidation
});
const getLyricUsecase = require('../../../use-case/Lyric/getLyric')({
  LyricDb,
  filterValidation
});
const updateLyricUsecase = require('../../../use-case/Lyric/updateLyric')({
  LyricDb,
  updateValidation 
});
const partialUpdateLyricUsecase = require('../../../use-case/Lyric/partialUpdateLyric')({ LyricDb });
const softDeleteLyricUsecase = require('../../../use-case/Lyric/softDeleteLyric')({ LyricDb });
const softDeleteManyLyricUsecase = require('../../../use-case/Lyric/softDeleteManyLyric')({ LyricDb });
const bulkInsertLyricUsecase = require('../../../use-case/Lyric/bulkInsertLyric')({ LyricDb });
const bulkUpdateLyricUsecase = require('../../../use-case/Lyric/bulkUpdateLyric')({ LyricDb });
const deleteLyricUsecase = require('../../../use-case/Lyric/deleteLyric')({ LyricDb });
const deleteManyLyricUsecase = require('../../../use-case/Lyric/deleteManyLyric')({ LyricDb });

const LyricController = require('./Lyric');

const addLyric = LyricController.addLyric(addLyricUsecase);
const findAllLyric = LyricController.findAllLyric(findAllLyricUsecase);
const getLyricCount = LyricController.getLyricCount(getLyricCountUsecase);
const getLyricById = LyricController.getLyric(getLyricUsecase);
const updateLyric = LyricController.updateLyric(updateLyricUsecase);
const partialUpdateLyric = LyricController.partialUpdateLyric(partialUpdateLyricUsecase);
const softDeleteLyric = LyricController.softDeleteLyric(softDeleteLyricUsecase);
const softDeleteManyLyric = LyricController.softDeleteManyLyric(softDeleteManyLyricUsecase);
const bulkInsertLyric = LyricController.bulkInsertLyric(bulkInsertLyricUsecase);
const bulkUpdateLyric = LyricController.bulkUpdateLyric(bulkUpdateLyricUsecase);
const deleteLyric = LyricController.deleteLyric(deleteLyricUsecase);
const deleteManyLyric = LyricController.deleteManyLyric(deleteManyLyricUsecase);

module.exports = {
  addLyric,
  findAllLyric,
  getLyricCount,
  getLyricById,
  updateLyric,
  partialUpdateLyric,
  softDeleteLyric,
  softDeleteManyLyric,
  bulkInsertLyric,
  bulkUpdateLyric,
  deleteLyric,
  deleteManyLyric,
};