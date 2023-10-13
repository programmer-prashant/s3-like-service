const express = require('express');
const router = express.Router();
const BucketController = require('../controllers/bucketController');

router.get('/', BucketController.listBuckets);
router.post('/:bucketName', BucketController.createBucket);
router.put('/:bucketName',BucketController.updateBucket)
router.delete('/:bucketName',BucketController.deleteBucket)
module.exports = router;
