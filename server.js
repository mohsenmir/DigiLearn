const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
global.config = require('./modules/config');


// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/digilearn');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));


const apiRouter = require('./modules/routes/api');
const webRouter = require('./modules/routes/web');

app.use('/api' , apiRouter)
app.use('/' , webRouter);

app.listen(config.port , () => {
    console.log(`Server running at Port ${config.port}`)
});