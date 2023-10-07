/**
 *addLyric.js
 */

const  LyricEntity = require('../../entities/Lyric');
const response = require('../../utils/response');
/**
 * @description : create new record of Lyric in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addLyric = ({
  LyricDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let Lyric = LyricEntity(dataToCreate);
  Lyric = await LyricDb.create(Lyric);
  return response.success({ data:Lyric });
};
module.exports = addLyric;