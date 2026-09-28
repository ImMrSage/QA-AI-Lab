import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn, spawnSync } from "node:child_process";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const vaultRoot = resolve(scriptDir, "..");

function globalNpmRoot() {
  const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
  const result = spawnSync(npmCommand, ["root", "-g"], {
    encoding: "utf8",
    windowsHide: true,
  });
  return result.status === 0 ? result.stdout.trim() : "";
}

function findQmdLauncher() {
  const candidates = [
    process.env.QA_AI_LAB_QMD_BIN,
    process.env.APPDATA && join(process.env.APPDATA, "npm", "node_modules", "@tobilu", "qmd", "bin", "qmd"),
    join(homedir(), ".npm-global", "lib", "node_modules", "@tobilu", "qmd", "bin", "qmd"),
  ].filter(Boolean);

  const npmRoot = globalNpmRoot();
  if (npmRoot) {
    candidates.push(join(npmRoot, "@tobilu", "qmd", "bin", "qmd"));
  }

  const launcher = candidates.find(existsSync);
  if (!launcher) {
    throw new Error(
      "QMD was not found. Install @tobilu/qmd globally or set QA_AI_LAB_QMD_BIN to its bin/qmd file.",
    );
  }
  return launcher;
}

let launcher;
try {
  launcher = findQmdLauncher();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

const child = spawn(process.execPath, [launcher, ...process.argv.slice(2)], {
  cwd: vaultRoot,
  env: process.env,
  stdio: "inherit",
  windowsHide: true,
});

child.on("error", (error) => {
  console.error(`Unable to start QMD: ${error.message}`);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 1);
  }
});
