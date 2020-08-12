const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const router = express.Router();
const config = require('./config');
const port = config.PORT;

app.use(cors());
routes.configure(app, router);

app.listen(port, () => console.log('server listening on ' + port));