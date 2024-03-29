import React from 'react'
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/entypo/plus'

const AddTextForm = ({onNewText = f => f}) => {
  let _text

  const submit = (e) => {
    e.preventDefault()
    onNewText(_text.value)
    _text.focus()
  }

  return (
    <form onSubmit={submit} className='add-form'>
        <input ref={input => _text = input} type="text"/>
        <button>
          <Icon icon={plus} />
        </button>
    </form>
  )
}


export default AddTextForm
