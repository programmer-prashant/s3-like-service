const fs = require('fs').promises;
const path = require('path');
const BucketModel = require('../models/bucketModel');

class BucketController {
  // List Buckets
  static async listBuckets(req, res) {
    try {
      const buckets = await BucketModel.listBuckets();
      res.json(buckets);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Create a New Bucket
  static async createBucket(req, res) {
    try {
      const { bucketName } = req.params;
      const dataDirectory = './data';
      const bucketPath = path.join(dataDirectory, bucketName);
      try {
        await fs.mkdir(dataDirectory, { recursive: true });
      } catch (mkdirError) {
        console.log(`Directory '${dataDirectory}' already exists.`);
      }

      if (!await fs.access(bucketPath).then(() => true).catch(() => false)) {
        await fs.mkdir(bucketPath);
        res.send(`Bucket '${bucketName}' created successfully`);
      } else {
        res.status(400).send('Bucket already exists');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Update a Bucket
  static async updateBucket(req, res) {
    try {
      const { bucketName } = req.params;
      const { newBucketName } = req.body;
      const dataDirectory = './data';
      const bucketPath = path.join(dataDirectory, bucketName);
      const newBucketPath = path.join(dataDirectory, newBucketName);

      if (await fs.access(bucketPath).then(() => true).catch(() => false) && !await fs.access(newBucketPath).then(() => true).catch(() => false)) {
        await fs.rename(bucketPath, newBucketPath);
        res.send(`Bucket '${bucketName}' renamed to '${newBucketName}'`);
      } else {
        res.status(400).send('Bucket does not exist, or the new name is already in use');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Delete a Bucket
  static async deleteBucket(req, res) {
    try {
      const { bucketName } = req.params;
      const dataDirectory = './data';
      const bucketPath = path.join(dataDirectory, bucketName);

      if (await fs.access(bucketPath).then(() => true).catch(() => false)) {
        await fs.rm(bucketPath, { recursive: true });
        res.send(`Bucket '${bucketName}' deleted successfully`);
      } else {
        res.status(400).send('Bucket does not exist');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = BucketController;
