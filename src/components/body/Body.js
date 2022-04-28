import React from 'react'
import { useState, useEffect } from "react"
import Footer from './Footer'
import UserCard from './UserCard'

export default function Body(props) {
const [cardId, setCardId] = useState(0)

  return (
    <div>
      <UserCard data={props.data} cardId={cardId}/>
      <Footer setCardId={setCardId} data={props.data} cardId={cardId}/>
    </div>
  )
}
