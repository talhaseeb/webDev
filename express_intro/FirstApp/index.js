const express = require('express');
const app = express();

app.use((req, res) => {
    console.log('We got a new REQUEST');
    res.send('We have received your request, Here is the response');
});

app.listen(3000, () => {
    console.log('LListening on port 3000 !!');
});