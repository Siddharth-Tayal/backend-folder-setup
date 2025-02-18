const fs = require("fs");
const path = require("path");

(function setupProject() {
    console.log("🚀 Running setup script...");

    const projectRoot = process.cwd();
    const folders = ["models", "controllers", "utils", "middlewares", "routes", "config"];
    const files = ["server.js", "app.js"];

    // Create folders if they don’t exist
    folders.forEach(folder => {
        const folderPath = path.join(projectRoot, folder);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`✅ Created folder: ${folder}`);
        }
    });

    // Create files if they don’t exist
    files.forEach(file => {
        const filePath = path.join(projectRoot, file);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "// Entry point\n", "utf8");
            console.log(`✅ Created file: ${file}`);
        }
    });

    console.log("🎉 Folder structure setup complete!");
})();
