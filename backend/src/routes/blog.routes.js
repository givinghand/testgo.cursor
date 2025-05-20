const router    = require('express').Router();
const bCtrl     = require('../controllers/blog.controller');
const authMW    = require('../middlewares/auth');
const rbacAdmin = require('../middlewares/rbac').ensureAdmin;

// Herkese açık
router.get('/',           bCtrl.getPublishedPosts);
router.get('/:slug',      bCtrl.getPostBySlug);

// Admin yetkisi
router.post('/',          authMW, rbacAdmin, bCtrl.createPost);
router.put('/:id',        authMW, rbacAdmin, bCtrl.updatePost);
router.delete('/:id',     authMW, rbacAdmin, bCtrl.deletePost);

module.exports = router;
