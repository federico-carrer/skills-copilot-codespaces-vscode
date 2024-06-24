// Create web server
// Create a web server that listens on port 3000 and serves a static HTML file named index.html. 
// Create a new file named comments.js that contains an array of comments. 
// Create a route named /comments that serves the comments array as JSON.

// You should use the fs module to read the index.html file and serve it as the response. 
// You should use the http module to create the server. 
// You should use the path module to construct the path to index.html. 
// You should use the url module to parse the request url.

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const comments = [
    { username: 'Alice', comment: 'I love your blog!', timestamp: new Date() },
    { username: 'Bob', comment: 'Good post!', timestamp: new Date() },
    { username: 'Charlie', comment: 'I agree with Alice.', timestamp: new Date() }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/comments' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(comments))