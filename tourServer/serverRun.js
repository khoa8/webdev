const app = require('./tourServer');
const host = '127.0.0.1';
const port = '3434';
app.listen(port, host, function () {
	console.log("Tour JSON session server listening on IPv4: " + host +
		":" + port);
});