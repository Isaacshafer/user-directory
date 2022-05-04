import React, { useState } from 'react'
import data from '../data'
import NewUserForm from './NewUserForm'


export default function UserCard(props) {
// const [editing, setEditing] = useState(false)
const [newUser, setNewUser] = useState(false)
const [userData, setUserdata] = useState(data)
const [cardId, setCardId] = useState(0)


  let displayMovies = 
    userData[cardId].favoriteMovies.map((element, index)=> {
      return <p key={index}>{index+1}. {element}</p>
    })
    let previousCard = () => {
      if(cardId === 0) return
      {setCardId(cardId-1)}
    }
    let nextCard = () => {
      if(cardId === userData.length-1) return
      {setCardId(cardId+1)}
    }
    let deleteCard = () => {
      setUserdata(userData.splice(cardId, 1))
      setCardId(cardId-1)
    }
    let createNewUser = () => {
      setNewUser(true)
    }
    let submitNewUser = (values) => {
      userData.push(values)
      setUserdata(userData)
      setNewUser(false)
    }
  

  return (
    <div>
      <div>
        <span>{cardId+1}/{userData.length}</span>
      </div>
      <div>
        <span>{userData[cardId].name.first} {userData[cardId].name.last}</span>
        <h4>From: <span>{userData[cardId].city}, {userData[cardId].country}</span></h4>
        <h4>Job Title: <span>{userData[cardId].title}</span></h4>
        <h4>Employer: <span>{userData[cardId].employer}</span></h4>
        <h4>Favorite Movies: {displayMovies}</h4>
      </div>
      <div>
        <button onClick={previousCard}>Previous</button>
        <button>Edit</button>
        <button onClick={deleteCard}>Delete</button>
        <button onClick={createNewUser}>New</button>
        <button onClick={nextCard}>Next</button>
      </div>
      {newUser ? <NewUserForm submitNewUser={submitNewUser} setUserdata={setUserdata} userData={userData}/> : null}
    </div>

  )
}
