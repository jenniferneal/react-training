import React from 'react';
import ProductGridContainer from '../containers/ProductGridContainer';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ProductGridContainer/>
    );
  }
}

export default App;
