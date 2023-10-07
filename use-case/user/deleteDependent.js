const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,LyricDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const LyricFilter = { '$or': [{ uploaded_by : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const LyricCnt =  await LyricDb.count(LyricFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  await roleDb.count(roleFilter);

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  await projectRouteDb.count(projectRouteFilter);

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  await routeRoleDb.count(routeRoleFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      Lyric :LyricCnt ,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,LyricDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const LyricFilter = { '$or': [{ uploaded_by : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const LyricCnt =  (await LyricDb.deleteMany(LyricFilter));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.deleteMany(userTokensFilter));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.deleteMany(roleFilter));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.deleteMany(projectRouteFilter));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.deleteMany(routeRoleFilter));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.deleteMany(userRoleFilter));
    let deleted = (await userDb.deleteMany(filter));
    let result = {
      Lyric :LyricCnt ,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,LyricDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const LyricFilter = { '$or': [{ uploaded_by : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const LyricCnt =  (await LyricDb.updateMany(LyricFilter,updateBody));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.updateMany(userTokensFilter,updateBody));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.updateMany(roleFilter,updateBody));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.updateMany(projectRouteFilter,updateBody));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.updateMany(routeRoleFilter,updateBody));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.updateMany(userRoleFilter,updateBody));
    let updated = (await userDb.updateMany(filter,updateBody));
    let result = {
      Lyric :LyricCnt ,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
