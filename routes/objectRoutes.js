const express = require('express');
const router = express.Router();
const ObjectController = require('../controllers/objectController');

router.get('/:bucketName', ObjectController.listObjects);
router.get('/:bucketName/:objectKey', ObjectController.getObject);
router.post('/:bucketName/:objectKey', ObjectController.putObject);
router.delete('/:bucketName/:objectKey', ObjectController.deleteObject);

module.exports = router;
