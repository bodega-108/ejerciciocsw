const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const engine = require('ejs-mate');
const path = require('path');

const app = express();

//settings
port = process.env.PORT || 3000;

app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))


//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/',require('./routes/index'));
// Static Files
app.use(express.static(path.join(__dirname,'public')));



//server startup
app.listen(port,()=>{
    console.log(`Server runing on port ${port}`);
})

