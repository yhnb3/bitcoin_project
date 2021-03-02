const express = require('express');
const app = express();
const port = 3000;

const request = require('request')
const { v4: uuidv4 } = require('uuid');
const sign = require('jsonwebtoken').sign


require('dotenv').config()

const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY
const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY
const server_url = process.env.UPBIT_OPEN_API_SERVER_URL

const payload = {
    access_key: access_key,
    nonce: uuidv4(),
}

const token = sign(payload, secret_key)

const options = {
    method: "GET",
    url: server_url + "/v1/accounts",
    headers: {Authorization: `Bearer ${token}`},
}


app.get('/account', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    request(options, (error, response, body) => {
        if (error) throw new Error(error)
            res.send(body)
        })
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});