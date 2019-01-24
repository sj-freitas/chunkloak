const express = require('express');
const registerRouteBlockers = require('./route-blocker/routeBlocker');

const app = express();

registerRouteBlockers(app);

app.use(express.static('build'));

app.listen(3000);
