import React from 'react';

class Product extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { 
      title,
      desc,
      image
    } = this.props;
    return (
        <div>{title}{desc}{image}</div>
    );
  }
}

export default Product;