"use strict";
const express = require('express');
const app = express();
app.get('/ads', (req, res) => {
    return res.json({ hello: 'world' });
});
app.listen(3030);
