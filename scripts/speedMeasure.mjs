import { execSync } from "node:child_process";

const command = process.argv[2];

if (!command) {
  console.error("실행할 명령어를 입력하세요.");
  process.exit(1);
}

const start = performance.now();

try {
  execSync(command, { stdio: "inherit", shell: true });
} finally {
  const end = performance.now();
  console.log(`\n걸린 시간: ${((end - start) / 1000).toFixed(3)}초`);
}
