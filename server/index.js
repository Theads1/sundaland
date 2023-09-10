const express = require("express");
const app = express();
const cors = require("cors");

//midware
app.use(cors());
app.use(epress.json());

app.listen(5000, ()=>{
    console.log("server has started on port 5000");
})