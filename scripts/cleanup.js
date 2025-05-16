import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to remove
const filesToRemove = [
  'footer-styles.css',
  'footer.html',
  'style.css',
  'gitignore.txt',
  'vite.config.ts.timestamp-1747366698556-185c39563555e.mjs'
];

// Directories to clean
const dirsToClean = [
  'dist',
  'node_modules/.cache',
  'node_modules/.vite'
];

// Clean up files
filesToRemove.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed: ${file}`);
  }
});

// Clean up directories
dirsToClean.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`Cleaned: ${dir}`);
  }
});

// Optimize package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Remove unnecessary scripts
  delete packageJson.scripts['build:dev'];
  
  // Sort dependencies alphabetically
  packageJson.dependencies = Object.fromEntries(
    Object.entries(packageJson.dependencies).sort()
  );
  packageJson.devDependencies = Object.fromEntries(
    Object.entries(packageJson.devDependencies).sort()
  );
  
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n'
  );
  console.log('Optimized: package.json');
}

console.log('Cleanup completed successfully!'); 