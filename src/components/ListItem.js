import React from 'react'

import Item from './Item'

const ListItem = ({items, onRemoveItem = f => f}) => {
  return (
    <ul>
      {items.map(item => <Item text={item.text} onClick={() => onRemoveItem(item.id)}/>)}
    </ul>
  )
}

export default ListItem
