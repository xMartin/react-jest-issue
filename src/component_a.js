var React = require('react/addons');
var TransitionGroup = React.addons.TransitionGroup;

var ComponentB = require('./component_b');

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        {this.props.show ? 'Hello World!' : null}
        <TransitionGroup>
          {this.props.show ? <ComponentB key='a' /> : null}
        </TransitionGroup>
      </div>
    );
  }

});
