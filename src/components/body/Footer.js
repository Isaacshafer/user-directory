import React from 'react'
import data from '../../data'

export default function Footer(props) {
  const {cardId, setCardId} = props

  let previousCard = () => {
    if(cardId === 0) return
    {setCardId(cardId-1)}
  }
  let nextCard = () => {
    if(cardId === data.length-1) return
    {setCardId(cardId+1)}
  }
  let deleteCard = () => {
    data.slice(cardId, 1)
  }

  return (
    <div>
      <button onClick={previousCard}>Previous</button>
      <button>Edit</button>
      <button onClick={deleteCard}>Delete</button>
      <button>New</button>
      <button onClick={nextCard}>Next</button>
    </div>
  )
}
