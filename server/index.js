const { mongoose } = require('./database')

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000); //Variable port con el valor de 3000

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/api/alumnos', require('./routes/alumnos.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on Port", app.get('port'));
});