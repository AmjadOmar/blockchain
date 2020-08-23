const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, "OIUOEREDHKHKD", "78s97d4x6dsf");

bitcoin.createNewBlock(2389, "78s97d4x6dsf", "45151ass4584");

bitcoin.createNewBlock(2389, "45151ass4584", "4515sdsdas66");

bitcoin.createNewBlock(2389, "4515sdsdas66", "45151ass4584");

let lastBlock = bitcoin.getLastBlock();

console.log(lastBlock);
