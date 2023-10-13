const fs = require('fs').promises;
const path = require('path');

class ObjectModel {
  static async listObjects(bucketName) {
    try {
      const bucketPath = path.join('./data', bucketName);
      const objects = await fs.readdir(bucketPath);
      return objects;
    } catch (error) {
      throw new Error('Error listing objects in the bucket');
    }
  }

  static async getObject(bucketName, objectKey) {
    try {
      const objectPath = path.join('./data', bucketName, objectKey);
      const objectData = await fs.readFile(objectPath, 'utf8');
      return objectData;
    } catch (error) {
      throw new Error('Error retrieving object');
    }
  }

  static async putObject(bucketName, objectKey, data) {
    try {
      const dataPath = path.resolve(__dirname, '..', 'data');
      const bucketPath = path.join(dataPath, bucketName);
      const objectPath = path.join(bucketPath, objectKey);
      await fs.mkdir(bucketPath, { recursive: true });
      try {
        await fs.access(objectPath);
        throw new Error('Object already exists');
      } catch (error) {
        console.log('Object does not exist, proceeding to write it.');
      }
      const dataString = JSON.stringify(data);
      await fs.writeFile(objectPath, dataString);
      return 'Object uploaded successfully';
    } catch (error) {
      throw new Error('Error uploading object');
    }
  }

  static async deleteObject(bucketName, objectKey) {
    try {
      const objectPath = path.join('./data', bucketName, objectKey);
      await fs.unlink(objectPath);
      return 'Object deleted successfully';
    } catch (error) {
      throw new Error('Error deleting object');
    }
  }
}

module.exports = ObjectModel;
