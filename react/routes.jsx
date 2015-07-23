var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Main = require('./routes/Main.jsx');
var Home = require('./routes/home/Home.jsx');
var Address = require('./routes/address/Address.jsx');
var Weather = require('./routes/weather/Weather.jsx');

var routes = (
  <Route handler={Main}>
    <Route handler={Home} name="home" path="/" />
    <Route handler={Address} name="address" path="/address/:lat/:lon"/>
    <Route handler={Weather} name="weather" path="/weather/:lat/:lon"/>
  </Route>
);

module.exports = routes;
