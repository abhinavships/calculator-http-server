const express = require("express");
const cors = require("cors");
const http = require("http"); 

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile("/Users/abhinavsden/Downloads/abhinav_projects/calculator-http-server/index.html");
})

app.post("/sum/", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const sum = a + b;

    res.json({
        ans: sum
    })
})
app.post("/subtract/", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const sub = a - b;

    res.json({
        ans: sub
    })
})
app.post("/multiply/", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const multiply = a * b;

    res.json({
        ans: multiply
    })
})
app.post("/divide/", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const divide = a / b;

    res.json({
        ans: divide
    })
})

app.listen(3003);

