const { Router } = require('express');
const router = Router();
const {getClinics, searchClinics} = require('../controllers/controllers')

router.get('/clinicas',getClinics)
router.get('/clinicas/:id',searchClinics)
module.exports = router;