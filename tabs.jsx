var React = require('react');

var Tabs = React.createClass({

  getInitialState: function(){
    return{ focused: 0};
  },

  clicked: function(index) {
    this.setState({focused: index});
  },

  render: function(){
    var self = this;
    return(
    <div>
      <ul> {
          this.props.items.map(function(el, index) {
            var style = '';
            if(self.state.focused === index){
              style = 'focused';
            }
            return <li className={style} onClick={self.clicked.bind(self, index)}>{el}</li>;
          })
        }

      </ul>
      <article>
        {this.props.content[this.state.focused]}
      </article>
    </div>
  );
  }
});
module.exports = Tabs;
