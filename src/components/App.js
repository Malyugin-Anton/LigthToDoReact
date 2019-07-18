import React from 'react'
import { v4 } from 'uuid'

import data from '../../data/items'

import '../../style/main.css'

import AddTextForm from './AddTextForm'
import ListItem from './ListItem'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: data.items
    }
  }

  addItem = (text) => {
    const items = [
      ...this.state.items,
      {
        id: v4(),
        text
      }
    ]
    this.setState({items})
  }

  removeItem = (id) => {
    const items = this.state.items.filter(item => item.id != id);
    this.setState({items})
  }

  render() {
    const { addItem, removeItem } = this
    return (
      <div className="main">
        <div className="app">
          <AddTextForm onNewText={addItem}/>
          <ListItem items={this.state.items} onRemoveItem={removeItem}/>
        </div>
      </div>
    )
  }
}
