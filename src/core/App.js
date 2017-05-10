import React from 'react';
import ProductGridContainer from '../containers/ProductGridContainer';
import AddProductContainer from '../containers/AddProductContainer';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <ProductGridContainer/>
        <AddProductContainer/>
      </div>
    );
  }
}

export default App;
