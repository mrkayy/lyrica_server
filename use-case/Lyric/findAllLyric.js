/**
 *findAllLyric.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Lyric(s). {status, message, data}
 */
const findAllLyric = ({
  LyricDb,filterValidation 
}) => async (params,req,res) => {
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let {
    query, options, isCountOnly 
  } = params;
  if (isCountOnly){
    let totalRecords = await LyricDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundLyric = await LyricDb.paginate(query,options);
    if (!foundLyric){
      return response.recordNotFound();
    }
    return response.success({ data:foundLyric });  
  }
        
};
module.exports = findAllLyric;