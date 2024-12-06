const fs = require('fs');
const path = require('path');

// Define the path of the parent directory containing the folders
const parentDir = path.join(__dirname, 'controllers'); // Replace 'your-folder-name' with your folder path

// Content for each README file
const readmeContent = `# Folder Name
This is the README file for this folder. Add specific information here.`;

// Function to create a README.md in each folder
function createReadmeInFolders(directory) {
  // Read all items in the directory
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    // Loop through each item in the directory
    files.forEach((file) => {
      const fullPath = path.join(directory, file);

      // Check if the item is a folder
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats of file: ${err}`);
          return;
        }

        if (stats.isDirectory()) {
          // Path to README.md file
          const readmePath = path.join(fullPath, 'README.md');

          // Check if README.md already exists
          fs.access(readmePath, fs.constants.F_OK, (err) => {
            if (err) {
              // README.md does not exist, so create it
              fs.writeFile(readmePath, readmeContent.replace('Folder Name', file), (err) => {
                if (err) {
                  console.error(`Error creating README.md in ${file}: ${err}`);
                } else {
                  console.log(`README.md created in ${file}`);
                }
              });
            } else {
              console.log(`README.md already exists in ${file}`);
            }
          });
        }
      });
    });
  });
}

// Call the function
createReadmeInFolders(parentDir);
