import React from 'react';
import CartListItem from './cart_list_item';

const CartList = (props) => {
  const items = props.items.map((item) => {
    return <CartListItem
      handleRemove={props.handleRemove}
      handleIncrease={props.handleIncrease}
      handleDecrease={props.handleDecrease}
      key={item.itemID}
      item={item} />
  });

  return (
    <ul className='list-group' style={{lineHeight: '20px'}}>
      {items}
    </ul>
  );
};

export default CartList;