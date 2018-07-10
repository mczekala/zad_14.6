var Counter = React.createClass({
  getDefaultProps() {
    console.log('getDefaultProps');
  },
  componentWillMount() {
    console.log('componentWillMount');
  },
  componentDidMount() {
    console.log('componentDidMount');
  },
  componentWillUnmount() {
    console.log('componentWillUnmount');
  },
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  },
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  },
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  },
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  },


  getInitialState: function() {
    console.log('getInitialState');
    return {
      counter: 0
    };
  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },
  render: function() {
    console.log('render');
    return React.createElement('div', {},
      React.createElement('button', { onClick: this.increment }, 'increment'),
      React.createElement('button', { onClick: this.decrement }, 'decrement'),
      React.createElement('span', {}, 'Licznik ' + this.state.counter)
    );
  }
});

var element = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter))
ReactDOM.render(element, document.getElementById('app'));