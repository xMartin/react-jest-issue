jest.dontMock('../component_a');
jest.mock('react/lib/ReactTransitionGroup');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var ComponentA = require('../component_a');

describe('Component A', function() {

  it('shows "Hello World!"', function() {
    var componentA = TestUtils.renderIntoDocument(
      <ComponentA />
    );
    componentA.setProps({show: true});
    expect(componentA.getDOMNode().textContent).toEqual('Hello World!');
  });

});
