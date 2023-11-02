const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve index.html
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const htmlContent = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');
        res.end(htmlContent);
    } else if (req.url === '/script.js') {
        // Serve script.js
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        const scriptContent = fs.readFileSync(path.join(__dirname, 'public', 'script.js'), 'utf-8');
        res.end(scriptContent);
    } else if (req.url === '/styles.css') {
        // Serve styles.css as a static file
        res.writeHead(200, { 'Content-Type': 'text/css' });
        const cssContent = fs.readFileSync(path.join(__dirname, 'public', 'styles.css'), 'utf-8');
        res.end(cssContent);
    } else if (req.url === '/download/resume.pdf') {
        // Serve resume.pdf
        const filePath = path.join(__dirname, 'public', 'download', 'resume.pdf');
        const stat = fs.statSync(filePath);
        res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Length': stat.size,
            'Content-Disposition': 'inline; filename=resume.pdf',
        });
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
