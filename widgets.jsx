var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs.jsx');
var Clock = require('./clock.jsx');
var Weather = require('./weather.jsx');
var Autocomplete = require('./autocomplete.jsx');

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>Hello World</div>
    );
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(<ul><li><Clock /></li> <li><Weather /> </li></ul>,
//     document.getElementById('main'));
// });

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Autocomplete names={ ['kevin', 'eric', 'max', 'ned', 'keith', 'kanye']} />,
    document.getElementById('main'));
});
