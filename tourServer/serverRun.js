const app = require('./tourServer');
const host = '127.43.43.8';
const port = '1111';
app.listen(port, host, function () {
	console.log("Tour JSON session server listening on IPv4: " + host +
		":" + port);
});