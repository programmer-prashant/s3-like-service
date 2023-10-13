const ObjectModel = require('../models/objectModel');

class ObjectController {
  // List objects in a bucket
  static async listObjects(req, res) {
    try {
      const { bucketName } = req.params;
      const objects = await ObjectModel.listObjects(bucketName);
      res.json(objects);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Get the content of an object
  static getObject(req, res) {
    try {
      const { bucketName, objectKey } = req.params;
      const objectData = ObjectModel.getObject(bucketName, objectKey);
      res.send(objectData);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Upload a new object
  static putObject(req, res) {
    try {
      const { bucketName, objectKey } = req.params;
      const data = req.body;
      if (!data) {
        res.status(400).send('No object data provided');
        return;
      }
      const result = ObjectModel.putObject(bucketName, objectKey, data);
      if (result) {
        res.send('Object created successfully');
      } else {
        res.status(500).send(result);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  
  // Delete an object
  static deleteObject(req, res) {
    try {
      const { bucketName, objectKey } = req.params;
      const result = ObjectModel.deleteObject(bucketName, objectKey);
      res.send('Object deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  
  
}

module.exports = ObjectController;
