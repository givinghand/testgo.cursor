const router      = require('express').Router();
const qCtrl       = require('../controllers/question.controller');
const authMW      = require('../middlewares/auth');
const rbacAdmin   = require('../middlewares/rbac').ensureAdmin;

// Öğrenci test senaryosu (sadece girişli öğrenci)
router.get('/random', authMW, qCtrl.getRandomQuestions);

// Aşağısı sadece Admin
router.post('/',      authMW, rbacAdmin, qCtrl.createQuestion);
router.get('/',       authMW, rbacAdmin, qCtrl.getAllQuestions);
router.get('/:id',    authMW, rbacAdmin, qCtrl.getQuestionById);
router.put('/:id',    authMW, rbacAdmin, qCtrl.updateQuestion);
router.delete('/:id', authMW, rbacAdmin, qCtrl.deleteQuestion);

module.exports = router;
