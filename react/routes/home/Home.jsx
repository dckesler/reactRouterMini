var React = require('react');
var Router = require('react-router');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  goAddress: function(){
    this.context.router.transitionTo("/address/"+this.refs.lat.getDOMNode().value + "/" + this.refs.lon.getDOMNode().value);
  },
  goWeather: function(){
    this.context.router.transitionTo("/weather/"+this.refs.lat.getDOMNode().value + "/" + this.refs.lon.getDOMNode().value);
  },
  render: function(){
    return (
      <div>
        <input ref="lat"/>
        <input ref="lon"/>
        <button onClick={this.goAddress}>Address</button>
        <button onClick={this.goWeather}>Weather</button>
        HOME
      </div>
    );
  }
});

module.exports = Home;
