var express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

/* /blockchain
    Allow us to fetch entire blockchain 
*/
app.get("/blockchain", function (req, res) {
  res.send(bitcoin);
});

/* /transaction
    Allow us to create a new transaction
*/
app.post("/transaction", function (req, res) {
  const blockIndex = bitcoin.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );

  res.json({ note: `Transaction will be added in a block ${blockIndex}.` });
});

/* /mine
    Allow us to mine a new block by using the proofOfWork method
*/
app.get("/mine", function (req, res) {});

app.listen(3000, function () {
  console.log("listening on port 3000...");
});
