
/**
 *deleteLyric.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Lyric. {status, message, data}
 */
const deleteLyric = ({ LyricDb }) => async (query,req,res) => {
  let deletedLyric = await LyricDb.deleteOne(query);
  if (!deletedLyric){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedLyric });
};

module.exports = deleteLyric;