const router = require('express').Router();
const controller = require('./controller.js');


router
  .route('/guitars')
    .get(controller.getAll)
router
  .route('/guitars/:_id')
    .get(controller.getOne)
    .post()

module.exports = router;