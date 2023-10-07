
/**
 *bulkInsertLyric.js
 */

const  LyricEntity = require('../../entities/Lyric');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Lyrics. {status, message, data}
 */

const bulkInsertLyric = ({ LyricDb }) => async (dataToCreate,req,res) => {
  let lyricEntities = dataToCreate.map(item => LyricEntity(item));
  let createdLyric = await LyricDb.create(lyricEntities);
  return response.success({ data:{ count:createdLyric.length || 0 } });
};
module.exports = bulkInsertLyric;