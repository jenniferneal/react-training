import React from 'react';
import Product from '../components/Product';
import {connect} from 'react-redux';

class ProductGridContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { 
      items,
      resultCount
    } = this.props;

    const products = items.map((product,idx) => {
      return <Product 
      idx = {idx}
      key = {idx}
      {...product}
      />
    });

    return (
      <div>
        {products}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.productReducer.items,
    resultCount: state.productReducer.resultCount
  }
}
export default connect(
  mapStateToProps
  ) (ProductGridContainer);
