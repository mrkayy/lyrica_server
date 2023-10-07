/**
 *softDeleteLyric.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Lyric. {status, message, data}
 */
const softDeleteLyric = ({ LyricDb }) => async (params,req,res) => {
  let updatedLyric = await LyricDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedLyric){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedLyric });
};
module.exports = softDeleteLyric;