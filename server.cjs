const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = 4174;
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".m4a": "audio/mp4",
};

const server = http.createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400);
    return response.end("Invalid URL");
  }
  if (pathname === "/") pathname = "/index.html";
  const file = path.resolve(root, "." + pathname);
  if (!file.startsWith(root + path.sep)) {
    response.writeHead(403);
    return response.end("Forbidden");
  }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) {
      response.writeHead(404);
      return response.end("Not found");
    }
    response.setHeader(
      "Content-Type",
      mimeTypes[path.extname(file)] || "application/octet-stream",
    );
    response.setHeader("Cache-Control", "no-store");
    response.setHeader("Accept-Ranges", "bytes");
    const range = request.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      let start = match && match[1] ? Number(match[1]) : 0;
      let end = match && match[2] ? Number(match[2]) : stat.size - 1;
      if (match && !match[1] && match[2]) {
        start = Math.max(0, stat.size - Number(match[2]));
        end = stat.size - 1;
      }
      end = Math.min(end, stat.size - 1);
      if (!match || start > end || start >= stat.size) {
        response.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
        return response.end();
      }
      response.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Content-Length": end - start + 1,
      });
      if (request.method === "HEAD") return response.end();
      return fs.createReadStream(file, { start, end }).pipe(response);
    }
    response.setHeader("Content-Length", stat.size);
    if (request.method === "HEAD") return response.end();
    fs.createReadStream(file).pipe(response);
  });
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use.`);
  } else console.error(error.message);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () => {
  console.log(`http://127.0.0.1:${port}`);
});
