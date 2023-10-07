/**
 *updateLyric.js
 */

const  LyricEntity = require('../../entities/Lyric');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Lyric. {status, message, data}
 */
const updateLyric = ({
  LyricDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let lyric = LyricEntity(dataToUpdate);
  lyric = await LyricDb.updateOne(query,lyric);
  if (!lyric){
    return response.recordNotFound();
  }
  return response.success({ data:lyric });
};
module.exports = updateLyric;