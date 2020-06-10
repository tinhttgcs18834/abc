var http = require('http');
var lanthu = 0;
const PORT = process.env.PORT || 5000

function XulyWEB (req, res) {
  lanthu++;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Server V3 - Hello World!'
  + "<BR> http://127.0.0.1:8080/"
  + "<BR> localhost:8080"
  + "<BR> lan thu -" + lanthu
  );
  console.log("\n\t...lan thu -" + lanthu);
}

http.createServer(XulyWEB).listen(PORT);
console.log("Node dang run o server");