const express   = require('express');   
const app       = express();
const port      = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World Wide Web!');
}); 



//route to adding new customer user
app.post('/newscustomeruser', (req,res) => {
    res.send ('Hello new user!')
});

//route to get all customer user parcels
app.get('/allparcels', (req,res) => {
    res.send ('All parcels')
});

//search customer parcels by customer username and parcel id



