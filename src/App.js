import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };

  //setState를 이용해서 값을 바꿀때마다 다시 render 
  //그냥 this.state.count로 값만 바꿨을때는 다시 redering 되지않음.
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }));
  };
  render() {
    return (
      <div>
          <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
      </div>
    )
  }

}

export default App;
