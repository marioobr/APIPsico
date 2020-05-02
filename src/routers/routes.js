const { Router } = require('express');
const router = Router();
const {index, getClinics, searchClinics} = require('../controllers/controllers')

router.get('/', index)
router.get('/clinicas',getClinics)
router.get('/clinicas/:id',searchClinics)
module.exports = router;