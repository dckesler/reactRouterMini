var React = require("react");
var axios = require("axios");
var Router = require('react-router');

var Weather = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return {
      weather: undefined
    };
  },
  componentDidMount: function(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+this.getParams().lat+'&lon='+this.getParams().lon)
    .then(function(response){
      this.setState({
        weather: response.data.weather[0].description
      });
    }.bind(this));
  },
  render: function(){
    return (
      <div>
        Weather
        {this.state.weather}
      </div>
    );
  }
});

module.exports = Weather;
