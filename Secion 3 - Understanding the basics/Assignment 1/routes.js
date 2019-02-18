const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<body><h1>Users Page</h1><form method="POST" action="/create-user">');
        res.write('<input type="text" name="username">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users') {
        res.write('<html><ul><li>User 1</li></html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST') {
        
        const body = [];
        
        req.on('data', (chunk) => {
            body.push(chunk);
        });

       return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log(userName);
	    res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    }


}

module.exports = requestHandler;
