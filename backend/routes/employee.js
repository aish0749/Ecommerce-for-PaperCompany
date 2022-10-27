const express = require('express');
const router = express.Router();
const privilege = require('../controllers/privilegemanager');

router.get('/logout', privilege.isEmployee, (req, res, next) =>{
    res.status(200).redirect('/logout');
});

router.get('/dashboard', privilege.isEmployee, (req, res, next) => {
    res.status(200).render('employeedashboard', {type : req.session.user.type});
});

module.exports = router;