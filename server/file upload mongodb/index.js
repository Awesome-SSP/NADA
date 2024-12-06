const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');


// MongoDB URI and database/collection details
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'fileupload';
const collectionName = 'Upload';



// Upload a file to the collection
async function upload(filePath) {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.error('Failed to find the file:', filePath);
            return false;
        }

        // Read the file content
        const buffer = fs.readFileSync(filePath);

        // Create the document with file details
        const doc = {
            name: path.basename(filePath),
            path: filePath,
            data: buffer // Store binary data
        };

        // Insert the document into the collection
        await collection.insertOne(doc);

        console.log('Upload successful for:', filePath);
        return true;
    } catch (err) {
        console.error('Error during file upload:', err);
        return false;
    } finally {
        // Close the connection
        await client.close();
    }
}

// Example usage
const filePath = `C:\\Users\\GAURAV\\Desktop\\nada\\server\\file upload mongodb\\upload sample\\Sih main pdf.pdf`;
upload(filePath)
    .then(success => {
        if (success) {
            console.log('File uploaded successfully.');
        } else {
            console.log('File upload failed.');
        }
    })
    .catch(err => console.error('Unexpected error:', err));
