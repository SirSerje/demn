const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
dotenv.config();
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

// Connect to MongoDB
//      MONGO_INITDB_ROOT_USERNAME: root
//       MONGO_INITDB_ROOT_PASSWORD: example
mongoose
    .connect(
        `mongodb://${process.env.MONGO_PATH}:${process.env.MONGO_PORT}/docker-node-mongo`,
        {useNewUrlParser: true}
    )
    .then(() => console.log('MongoDB Connected'))
    // @ts-ignore
    .catch(err => console.log(err));

const Item = require('./models/Item');

// @ts-ignore
app.get('/', (req, res) => {
    Item.find()
    // @ts-ignore
        .then(items => {
            console.log('____');
            return res.render('index', {items})
        })
        // @ts-ignore
        .catch(err => res.status(404).json({msg: 'No items found'}));
});
// @ts-ignore
app.post('/item/add', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

// @ts-ignore
    newItem.save().then(item => res.redirect('/'));
});

const port = process.env.API_PORT;
app.listen(port, () => console.log(`Server running... at port ${port}`));
