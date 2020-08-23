const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, "OIUOEREDHKHKD", "78s97d4x6dsf");

setTimeout(function () {
  bitcoin.createNewBlock(2389, "78s97d4x6dsf", "45151ass4584");
  console.log(bitcoin);
}, 10000);
