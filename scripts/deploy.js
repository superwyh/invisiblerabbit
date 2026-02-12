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

console.log('Pushing to origin main...');
execSync('git push origin main', { stdio: 'inherit' });

console.log('Deploy done. GitHub Actions will publish to Pages shortly.');
