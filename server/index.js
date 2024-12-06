
const express = require('express');
const app = express();

const route = express.Router();

//route.use(reqFilter);


app.get('/',(req,resp)=>{
    resp.send('Welcome, to my Home Page')

})

console.log("hey it working fine");
// app.use('/', route)
app.listen(5000);