var React = require('react');
var axios = require('axios');

var Async = React.createClass({
  getInitialState: funciton(){

  },
  componentWillReceiveProps: function(){

  },
  goFetchData: function(){
    axios.get(this.props.url).then(function(){

    })
  },
  render: function(){
    return (
      <div>
        <button onClick={this.goFetchData}>Get me Stuff!!</button>
      </div>
    );
  }
});

module.exports = Async;
