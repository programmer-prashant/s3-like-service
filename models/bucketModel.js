const fs = require('fs').promises;

class BucketModel {
  static async listBuckets() {
    try {
      const dataDirectory = './data';
      const buckets = await fs.readdir(dataDirectory);
      return buckets;
    } catch (error) {
      throw new Error('Error listing buckets');
    }
  }
}

module.exports = BucketModel;