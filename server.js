
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let VehicleStatus = "SAFE";

app.get('/status', (req, res) => { 
 
    res.json({
        status: VehicleStatus
    })
})

app.post('/alert', (req, res) => {

    VehicleStatus = "ALERT";

    console.log('Alert received:');

    res.json({
        message: 'Alert received',
    })
 })

 app.post('/reset', (req, res) => { 
    VehicleStatus = "SAFE";

    console.log('System reset');
    res.json({
        message: "System reset"
    });
 })

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});