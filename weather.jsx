var React = require('react');

var Weather = React.createClass ({

  getInitialState: function() {
    return { currWeather: "Getting weather...",
      city: '',
      description: '',
      temp: ''
     };
  },

  componentDidMount: function() {
    this.long = 0;
    this.lat = 0;
    navigator.geolocation.getCurrentPosition(function(pos) {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
      this.getWeather();
    }.bind(this));


  },

  getWeather: function(){
    this.request = new XMLHttpRequest();
    this.request.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + this.lat + "&lon=" + this.long + "&appid=645c5d39c7603f17e23fcaffcea1a3c1", true);

    this.request.onload = function() {
      this.currWeather = JSON.parse(this.request.responseText);
      var farenheit = Math.floor((this.currWeather.main.temp * 9/5) - 459.67);
      this.setState({currWeather: "Current Weather", city: this.currWeather.name, description: this.currWeather.weather[0].description, temp: farenheit});
    }.bind(this);
    this.request.send();


  },

  render: function(){
    return (
      <span>
        <h2>{this.state.currWeather}</h2>
        <ul>
          <li>{this.state.city}</li>
          <li>{this.state.description}</li>
          <li>{this.state.temp}</li>
        </ul>
      </span>
    );
  }

});


module.exports = Weather;
