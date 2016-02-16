var React = require('react');


var Clock = React.createClass ({
  getInitialState: function() {
    return { time: new Date().toString()};
  },

  componentDidMount: function(){
    this.timer = setInterval(this.tick, 50);
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
  },

  tick: function(){
    this.setState({time: new Date().toString()});
  },

  render: function() {
    return <div>
      {this.state.time}
    </div>;
  }
});

module.exports = Clock;
