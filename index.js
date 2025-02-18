const fs = require("fs");
const path = require("path");

const folders = ["models", "controllers", "routes", "utils", "middlewares", "config"];
const files = ["server.js", "app.js"];

// Create folders if they don't exist
folders.forEach(folder => {
    const folderPath = path.join(__dirname, folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Created folder: ${folder}`);
    }
});

// Create files if they don't exist
files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "// Entry point of the application\n", "utf8");
        console.log(`Created file: ${file}`);
    }
});

console.log("Folder structure setup complete!");