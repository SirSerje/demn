import {Item, IUserModel} from '../models/Item';
import * as express from 'express';
import * as dotenv from 'dotenv'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'

dotenv.config();
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

// Connect to MongoDB
// MONGO_INITDB_ROOT_USERNAME: root
// MONGO_INITDB_ROOT_PASSWORD: example

mongoose
    .connect(
        `mongodb://${process.env.MONGO_PATH}:${process.env.MONGO_PORT}/docker-node-mongo`,
        {useNewUrlParser: true}
    )
    .then(() => console.log('MongoDB Connected'))
    .catch((err: Error) => console.log(err));


app.get('/', (req: express.Request, res: express.Response) => {
    Item.find()
        .then((items: Array<IUserModel>) => {
            return res.render('index', {items})
        })
        .catch((err: Error) => res.status(404).json({msg: 'No items found'}));
});
app.post('/item/add', (req: express.Request, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then((item: IUserModel) => res.redirect('/'));
});

const port = process.env.API_PORT;
app.listen(port, () => console.log(`Server running... at port ${port}`));
