const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  "chain": [
    {
      "index": 1,
      "timestamp": 1656550376871,
      "transactions": [],
      "nonce": 100,
      "hash": "0",
      "previousBlockHash": "0",
    },
    {
      "index": 2,
      "timestamp": 1656550456405,
      "transactions": [],
      "nonce": 18140,
      "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      "previousBlockHash": "0",
    },
    {
      "index": 3,
      "timestamp": 1656550522029,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "fb2a0b70f80e11ec944eeb5668765f83",
          "transactionId": "2a941b30f80f11ec944eeb5668765f83",
        },
        {
          "amount": 400,
          "sender": "ERWERQWRQWROEDLKJWRER349014344SN",
          "recipient": "CERSDFDFOEIRJOI93049021SKJD",
          'transactionId': "441bc030f80f11ec944eeb5668765f83",
        },
        {
          "amount": 200,
          "sender": "ERWERQWRQWROEDLKJWRER349014344SN",
          "recipient": "CERSDFDFOEIRJOI93049021SKJD",
          "transactionId": "48a3e060f80f11ec944eeb5668765f83",
        },
        {
          "amount": 100,
          "sender": "ERWERQWRQWROEDLKJWRER349014344SN",
          "recipient": "CERSDFDFOEIRJOI93049021SKJD",
          "transactionId": "4c718a30f80f11ec944eeb5668765f83",
        },
      ],
      "nonce": 45203,
      "hash": "0000aa65949addbd83ccd608a4e7086c9243dcbc948f2d02ffb676b42018515c",
      "previousBlockHash":
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      "index": 4,
      "timestamp": 1656550567597,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "fb2a0b70f80e11ec944eeb5668765f83",
          "transactionId": "51b09e50f80f11ec944eeb5668765f83",
        },
        {
          "amount": 10,
          "sender": "ERWERQWRQWROEDLKJWRER349014344SN",
          "recipient": "CERSDFDFOEIRJOI93049021SKJD",
          "transactionId": "6264bdd0f80f11ec944eeb5668765f83",
        },
        {
          "amount": 40,
          "sender": "ERWERQWRQWROEDLKJWRER349014344SN",
          "recipient": "CERSDFDFOEIRJOI93049021SKJD",
          "transactionId": "65fc6380f80f11ec944eeb5668765f83",
        },
        {
          "amount": 50,
          "sender": "ERWERQWRQWROEDLKJWRER349014344SN",
          "recipient": "CERSDFDFOEIRJOI93049021SKJD",
          "transactionId": "68c60ad0f80f11ec944eeb5668765f83",
        },
        {
          "amount": 70,
          "sender": "ERWERQWRQWROEDLKJWRER349014344SN",
          "recipient": "CERSDFDFOEIRJOI93049021SKJD",
          "transactionId": "6b054c70f80f11ec944eeb5668765f83",
        },
      ],
      "nonce": 14403,
      "hash": "0000799f460c55ed96da134dd608de064bcf3b0964ff77dc9e4c925c68fc2605",
      "previousBlockHash":
        "0000aa65949addbd83ccd608a4e7086c9243dcbc948f2d02ffb676b42018515c",
    },
    {
      "index": 5,
      "timestamp": 1656550583133,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "fb2a0b70f80e11ec944eeb5668765f83",
          "transactionId": "6cd94920f80f11ec944eeb5668765f83",
        },
      ],
      "nonce": 25084,
      "hash": "000019db2773c62e48633282ddb852f548f0d91131ddf3a9e9672347c7781f34",
      "previousBlockHash":
        "0000799f460c55ed96da134dd608de064bcf3b0964ff77dc9e4c925c68fc2605",
    },
    {
      "index": 6,
      "timestamp": 1656550595149,
      "transactions": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "fb2a0b70f80e11ec944eeb5668765f83",
          "transactionId": "761b9600f80f11ec944eeb5668765f83",
        },
      ],
      "nonce": 77776,
      "hash": "0000cbcb827fc97b7666be0cdd121b275b499c6e184a01ed264d67e0c0a29a97",
      "previousBlockHash":
        "000019db2773c62e48633282ddb852f548f0d91131ddf3a9e9672347c7781f34",
    },
  ],
  "pendingTransactions": [
    {
      "amount": 12.5,
      "sender": "00",
      "recipient": "fb2a0b70f80e11ec944eeb5668765f83",
      "transactionId": "7d451500f80f11ec944eeb5668765f83",
    },
  ],
  "currentNodeUrl": "http://localhost:3001",
  "networkNodes": [],
};

console.log("Valid: ", bitcoin.chainIsValid(bc1.chain));
