# Blockchain on Javascript
 Instructions:
 
 1. Download the file and run npm install
 2. There are 5 nodes in total and can be run by using this command :
    - npm run node_1 (node_<x> to max 5)
 3. Run a postman app to execute transactions:
    a. Adding nodes :
    http://localhost:3001/register-and-broadcast-node
    Body (raw & JSON type) :
       {
         "newNodeUrl" : "http://localhost:3005"
       }
    b. Execute a transactions 
    - http://localhost:3001/transaction/broadcast
    -  {
       "amount": 506,
       "sender":  "SSJKDHOWEHROEIRHOERT09E3533" , 
       "recipient":  "ALEXWRQWROEDLKJWRER349014344SN"
       }
 4. Execute the mine to create a new block
    - http://localhost:3001/mine
 5. Run the explorer
    - http://localhost:3002/block-explorer
