const express = require('express');
const router = express.Router();
const LyricController = require('../../../controller/device/v1/Lyric');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/lyric/create').post(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.addLyric);
router.route('/device/api/v1/lyric/list').post(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.findAllLyric);
router.route('/device/api/v1/lyric/count').post(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.getLyricCount);
router.route('/device/api/v1/lyric/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.getLyricById);
router.route('/device/api/v1/lyric/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.updateLyric);   
router.route('/device/api/v1/lyric/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.partialUpdateLyric);   
router.route('/device/api/v1/lyric/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.softDeleteLyric);
router.route('/device/api/v1/lyric/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.softDeleteManyLyric);
router.route('/device/api/v1/lyric/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.bulkInsertLyric);
router.route('/device/api/v1/lyric/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.bulkUpdateLyric); 
router.route('/device/api/v1/lyric/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.deleteLyric);
router.route('/device/api/v1/lyric/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,LyricController.deleteManyLyric);

module.exports = router;
