/**
 *partialUpdateLyric.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Lyric. {status, message, data}
 */
const partialUpdateLyric = ({ LyricDb }) => async (params,req,res) => {
  const lyric = await LyricDb.updateOne(params.query,params.dataToUpdate);
  if (!lyric){
    return response.recordNotFound();
  }
  return response.success({ data:lyric });
};
module.exports = partialUpdateLyric;