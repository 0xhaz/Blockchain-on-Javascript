# Blockchain on Javascript

This repository is the source code on how blockchain technology works by coding out their own blockchain prototype in javascript.

## Getting Started

The first step in running this project is to run `npm install`.

Instructions:
 
 1. Download the file and run npm install
 2. There are 5 nodes in total and can be run by using this command :
    - npm run node_1 (node_<x> to max 5)
 3. Run a postman app to execute transactions: <br />
    a. Adding nodes :
    http://localhost:3001/register-and-broadcast-node <br />
    Body (raw & JSON type) : <br />
       { <br />
         "newNodeUrl" : "http://localhost:3001" (3001 to 3005) <br />
       } <br />
    b. Execute a transactions <br />
    - http://localhost:3001/transaction/broadcast <br />
    -  { <br />
       "amount": 506,
       "sender":  "SSJKDHOWEHROEIRHOERT09E3533" , 
       "recipient":  "ALEXWRQWROEDLKJWRER349014344SN" <br />
       } <br />
 4. Execute the mine to create a new block
    - http://localhost:3001/mine <br />
 5. Run the explorer
    - http://localhost:3002/block-explorer

## Content

- A **proof of work** algorithm to secure the network.
- **Hashing algorithms** to secure the data within the blockchain.
- The ability to **mine (create) new blocks** that contain data.
- The ability to **create transactions** and store them in blocks.
- An **API/server** that will be used to interact with the blockchain from the internet.
- It will be hosted on a **decentralized blockchain network**.
- A **consensus algorithms** to verify that the network nodes have valid data and are synchronized.
- A **broadcasting system** to keep the data in the blockchain network synchronized.



 
