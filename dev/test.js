const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(789457, "OIUOEREDHKHKD", "78s97d4x6dsf");

// bitcoin.createNewTransaction(100, "ALEXHT845SJ5TKCJ2", "JENN5BG5DF6HT8NG9");

// bitcoin.createNewTransaction(130, "ALEXHT845SJ5TKCJ2", "JENN5BG5DF6HT8NG9");
// bitcoin.createNewTransaction(140, "OMARHJHFDHIUDLKLF", "AMJADHUDNDISNUFND");
// bitcoin.createNewTransaction(135, "AMJADHUDNDISNUFND", "YASSERJKJFD89DNKJ");
// bitcoin.createNewTransaction(665, "AMJADHUDNDISNUFND", "HELLFHCVNDHJ54FJD");

// bitcoin.createNewBlock(548764, "AKMC875E6S1RS9", "WPLS214R7T6SJ3G2");
// bitcoin.createNewTransaction(130, "ALEXHT845SJ5TKCJ2", "JENN5BG5DF6HT8NG9");
// bitcoin.createNewTransaction(140, "OMARHJHFDHIUDLKLF", "AMJADHUDNDISNUFND");
// bitcoin.createNewTransaction(135, "AMJADHUDNDISNUFND", "YASSERJKJFD89DNKJ");

const previousBlockHash = "87765DA6CCF0668238C1D27C35692E11";

const currentBlockData = [
  {
    amount: 10,
    sender: "B4CEE9C0E5CD571",
    recipient: "3A3F6E462D48E9",
  },
];

const nonce = 100;

var btc = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(btc);
