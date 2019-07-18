import React from 'react'

import { Icon } from 'react-icons-kit'
import {minus} from 'react-icons-kit/entypo/minus'

const Item = ({ text, onClick = f => f}) =>
  <li>{text} <button onClick={onClick}><Icon icon={minus}/></button></li>

export default Item
