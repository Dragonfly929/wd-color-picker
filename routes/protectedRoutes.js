// routes/protectedRoutes.js

const { Router } = require('express');
const { requireAuth, checkRole, checkPermission } = require('../middleware/authMiddleware');

const router = Router();

router.get('/admin', requireAuth, checkRole(['ADMIN']), (req, res) => res.render('admin'));
router.get('/writer', requireAuth, checkRole(['WRITER']), (req, res) => res.render('writer'));
router.get('/visitor', requireAuth, checkRole(['VISITOR']), (req, res) => res.render('visitor'));

// Example with permissions
router.get('/protected-route', requireAuth, checkPermission(['READ', 'WRITE']), (req, res) => res.render('protected'));

module.exports = router;
