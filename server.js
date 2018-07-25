const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const beers = require('./app/routes/beers');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/beers', {
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log('connected to beers db')
});
mongoose.connection.on('error', (err) => {
    console.log('Uh oh ...' + err)
});

app.get('/', (req, res) => {
    res.json({message: "welcome to Watermonitor"})
});

app.use('/api', router);

router.get('/', (req, res) => {
    res.json({message: "Great, now check out the API/beers endpoint."})
});

router.use('/beers', beers)
// base/api/beers



//Middleware

// app.use((req, res, next)=>{
//     console.log('Something hitting me...');
//     next()
// });

// app.use((req, res, next) => {
//     console.log('...and I don\'t know if I like it');
//     next();
// });




const port = process.env.PORT || 8080
app.listen(port);

console.log('Listening on port 8080');

