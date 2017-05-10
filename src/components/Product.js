import React from 'react';
import styles from './styles/main.scss';

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
        <div>
          <div className={styles.titles+" titles"}>{title}</div>
          {desc}{image}
        </div>
    );
  }
}

export default Product;