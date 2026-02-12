import { execSync } from 'child_process';

console.log('Building...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Staging files...');
execSync('git add .', { stdio: 'inherit' });

try {
  execSync('git diff --staged --quiet', { stdio: 'inherit' });
  console.log('No changes to commit.');
} catch {
  execSync('git commit -m "deploy"', { stdio: 'inherit' });
}

// Get current branch name
const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
console.log(`Pushing to origin ${currentBranch}...`);
execSync(`git push origin ${currentBranch}`, { stdio: 'inherit' });

console.log('Deploy done. GitHub Actions will publish to Pages shortly.');
