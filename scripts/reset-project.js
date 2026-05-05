#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');

// Files and directories to clean
const filesToDelete = [
  path.join(projectRoot, '.expo'),
  path.join(projectRoot, 'node_modules'),
  path.join(projectRoot, 'package-lock.json'),
];

console.log('🧹 Resetting project...\n');

// Remove files and directories
filesToDelete.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`Removing ${path.relative(projectRoot, file)}...`);
    if (fs.lstatSync(file).isDirectory()) {
      fs.rmSync(file, { recursive: true, force: true });
    } else {
      fs.unlinkSync(file);
    }
  }
});

console.log('\n📦 Installing dependencies...\n');

// Reinstall dependencies
try {
  execSync('npm install', { cwd: projectRoot, stdio: 'inherit' });
  console.log('\n✅ Project reset successfully!');
} catch (error) {
  console.error('\n❌ Failed to install dependencies');
  process.exit(1);
}
