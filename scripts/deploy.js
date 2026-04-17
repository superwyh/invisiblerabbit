import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const rootCname = path.join(rootDir, "CNAME");
const publicCname = path.join(rootDir, "public", "CNAME");
const distCname = path.join(distDir, "CNAME");
const distNoJekyll = path.join(distDir, ".nojekyll");
const shellCommand = process.platform === "win32" ? process.env.ComSpec || "cmd.exe" : "sh";

function run(command, args = [], options = {}) {
  return execFileSync(command, args, {
    stdio: "inherit",
    ...options,
  });
}

function runNpm(scriptName) {
  if (process.platform === "win32") {
    return run(shellCommand, ["/d", "/s", "/c", "npm", "run", scriptName]);
  }

  return run("npm", ["run", scriptName]);
}

function capture(command, args = []) {
  return execFileSync(command, args, {
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function isGitRepo() {
  try {
    execFileSync("git", ["rev-parse", "--is-inside-work-tree"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function hasOriginRemote() {
  try {
    return capture("git", ["remote", "get-url", "origin"]).length > 0;
  } catch {
    return false;
  }
}

function ensureDistMetaFiles() {
  const source = existsSync(rootCname) ? rootCname : existsSync(publicCname) ? publicCname : null;

  mkdirSync(distDir, { recursive: true });

  if (source) {
    copyFileSync(source, distCname);
    console.log(`CNAME copied to dist from ${path.relative(rootDir, source)}.`);
  } else {
    console.warn("No CNAME file found in project root or public/.");
  }

  writeFileSync(distNoJekyll, "", "utf-8");
  console.log(".nojekyll ensured in dist.");
}

console.log("Building...");
runNpm("build");

console.log("Ensuring GitHub Pages files...");
ensureDistMetaFiles();

if (!isGitRepo()) {
  console.log("No git repository detected. Build is ready in dist/ with CNAME and .nojekyll.");
  process.exit(0);
}

if (!hasOriginRemote()) {
  console.error('Git repository detected, but no "origin" remote is configured.');
  process.exit(1);
}

console.log("Staging deployable files...");
run("git", ["add", "-A"]);

let hasStagedChanges = true;
try {
  execFileSync("git", ["diff", "--cached", "--quiet"], { stdio: "ignore" });
  hasStagedChanges = false;
} catch {
  hasStagedChanges = true;
}

if (hasStagedChanges) {
  console.log("Committing changes...");
  run("git", ["commit", "-m", "deploy"]);
} else {
  console.log("No changes to commit.");
}

const currentBranch = capture("git", ["rev-parse", "--abbrev-ref", "HEAD"]);

if (!currentBranch || currentBranch === "HEAD") {
  console.log("Detached HEAD detected. Skipping push.");
  process.exit(0);
}

console.log(`Pushing to origin ${currentBranch}...`);
run("git", ["push", "origin", currentBranch]);

console.log("Deploy done. GitHub Actions will publish to Pages shortly.");
