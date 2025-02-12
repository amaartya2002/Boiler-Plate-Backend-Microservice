const express = require('express')
const {InfoController} = require('../../controllers')
const router = express.Router();

//console.log(InfoController);

router.get('/info',InfoController.info)


module.exports = router;