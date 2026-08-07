const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.sendFile("/Users/abhinavsden/Downloads/abhinav_projects/calculator-http-server/index.html");
})

app.get("/sum/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a + b;

    res.json({
        ans: sum
    })
})
app.get("/subtract/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sub = a - b;

    res.json({
        ans: sub
    })
})
app.get("/multiply/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const multiply = a * b;

    res.json({
        ans: multiply
    })
})
app.get("/divide/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const divide = a / b;

    res.json({
        ans: divide
    })
})

app.listen(3003);

