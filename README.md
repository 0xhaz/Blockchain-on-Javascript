# Blockchain on Javascript
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
