var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Main = require('./routes/Main.jsx');
var Home = require('./routes/home/Home.jsx');
var Address = require('./routes/address/Address.jsx');
var Weather = require('./routes/weather/Weather.jsx');

var routes = (
  <Route handler={Main}>
    <Route name="home" path="/" handler={Home} />
    <Route name="address" path="/address/:lat/:lon" handler={Address} />
    <Route name="weather" path="weather/:lat/:lon" handler={Weather} />
  </Route>
);

module.exports = routes;
