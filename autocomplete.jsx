var React = require('react');


var Autocomplete = React.createClass({
  getInitialState: function(){
    return {selected: "",
    matchedWords: []
  };
  },


  toAutoComplete: function(event){
    var targetVal = event.target.value;
    var matched = [];
    // debugger
    for (var i = 0; i < this.props.names.length; i++) {
      var toggle = true;
      for (var j = 0; j < targetVal.length; j++) {
        if(targetVal[j] !== this.props.names[i][j]){
          toggle = false;
        }
      }
      if(targetVal.length === 0) {
        toggle = false;
      }
      if(toggle === true) {
        matched.push(this.props.names[i]);
      }
    }
    this.setState({selected: targetVal, matchedWords: matched});
  },

  toFill: function(event) {
    this.setState({selected: event.target.innerHTML});
  },

  render: function(){
    return(
      <ul>
        <input onChange={this.toAutoComplete} value={this.state.selected}>
        </input>
        {this.state.matchedWords.map(function(name, index){
          return <li key={index} onClick={this.toFill}>{name}</li>;
          }.bind(this)
        )}
      </ul>
    );
  }
});


module.exports = Autocomplete;
