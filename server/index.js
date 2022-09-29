const express = require('express');
const { Router } = require('express');
const cors = require('cors');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());

app.use(Router().get('/', (req, res) => {
    res.status(200).json({'message':'Hello World!'});
}))

app.use((req, res) => {
    res.status(404).json({'message':'Not Found'});
})

app.listen(PORT, HOST, () => {
    console.log("Server is running!")
});