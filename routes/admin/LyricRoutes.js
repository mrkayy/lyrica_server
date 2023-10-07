const express = require('express');
const router = express.Router();
const LyricController = require('../../controller/admin/Lyric');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant'); 

router.route('/admin/lyric/create').post(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.addLyric);
router.route('/admin/lyric/list').post(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.findAllLyric);
router.route('/admin/lyric/count').post(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.getLyricCount);
router.route('/admin/lyric/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.getLyricById);
router.route('/admin/lyric/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.updateLyric);   
router.route('/admin/lyric/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.partialUpdateLyric);   
router.route('/admin/lyric/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.softDeleteLyric);
router.route('/admin/lyric/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.softDeleteManyLyric);
router.route('/admin/lyric/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.bulkInsertLyric);
router.route('/admin/lyric/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.bulkUpdateLyric); 
router.route('/admin/lyric/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.deleteLyric);
router.route('/admin/lyric/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,LyricController.deleteManyLyric);

module.exports = router;
