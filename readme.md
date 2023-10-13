# AWS S3-Like Service with Node.js

This is a basic AWS S3-like service implemented using Node.js. It provides simple storage and retrieval of objects within user-defined buckets. This README will guide you through the service and provide test cases to verify its functionality.

### Installation

1. Install the required dependencies using `npm install`.

### Starting the Server

Run the following command to start the server:
npm start

### PORT

The server will be available at http://localhost:3000.

# S3-Like Service

A simplified S3-like service implemented in Node.js.

## Getting Started


 **API Endpoints**

   - List Buckets:
     - **URL:** http://localhost:3000/buckets
     - **Request Type:** GET

   - Create a New Bucket:
     - **URL:** http://localhost:3000/buckets/{bucketName}
     - **Request Type:** POST

   - Rename (Update) a Bucket
      - **Request Type:** PUT
      - **URL:** http://localhost:3000/buckets/{bucketName}
      - **Payload:** Provide JSON data in the request body with the new bucket name.
        {
          "newBucketName": "new-bucket-name"
        }

    - Delete a Bucket
      - **Request Type:** DELETE
      - **URL:** http://localhost:3000/buckets/{bucketName}



   - List Objects in a Bucket:
     - **URL:** http://localhost:3000/objects/{bucketName}
     - **Request Type:** GET

   - Upload an Object to a Bucket:
     - **URL:** http://localhost:3000/objects/{bucketName}/{objectKey}
     - **Request Type:** POST
     - **Body:** Your object data

   - Get an Object:
     - **URL:** http://localhost:3000/objects/{bucketName}/{objectKey}
     - **Request Type:** GET

   - Update an Object:
     - **URL:** http://localhost:3000/objects/{bucketName}/{objectKey}
     - **Request Type:** PUT
     - **Body:** Your updated object data

   - Delete an Object:
     - **URL:** http://localhost:3000/objects/{bucketName}/{objectKey}
     - **Request Type:** DELETE








