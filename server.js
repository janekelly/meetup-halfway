var express = require('express');
var path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
	const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
  <title>Meetup Halfway App</title>
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
</head>
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
        </body>
      </html>
      `;

     res.send(HTML);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});