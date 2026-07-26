import fs from "node:fs";
import path from "node:path";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
if (!repository || process.env.GITHUB_ACTIONS !== "true") process.exit(0);

const root = path.resolve("out");
const prefix = `/${repository}`;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith(".html")) {
      let html = fs.readFileSync(file, "utf8");
      html = html
        .replaceAll('src="/images/', `src="${prefix}/images/`)
        .replaceAll('href="/images/', `href="${prefix}/images/`)
        .replaceAll('href="/products/', `href="${prefix}/products/`)
        .replaceAll('href="/#', `href="${prefix}/#`)
        .replaceAll('href="/"', `href="${prefix}/"`);
      fs.writeFileSync(file, html);
    }
  }
}

walk(root);
fs.writeFileSync(path.join(root, ".nojekyll"), "");
