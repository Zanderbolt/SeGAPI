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
app.use('/api/unidad01', require('./routes/unidad01.routes'));
app.use('/api/unidad02', require('./routes/unidad02.routes'));
app.use('/api/unidad03', require('./routes/unidad03.routes'));
app.use('/api/unidad04', require('./routes/unidad04.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on Port", app.get('port'));
});