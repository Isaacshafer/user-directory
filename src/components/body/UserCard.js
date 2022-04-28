import { useState, useEffect } from "react"
import React from 'react'

export default function UserCard(props) {
  const {data, cardId} = props


  let displayMovies = 
    data[cardId].favoriteMovies.map((element, index)=> {
      return <p key={index}>{index+1}. {element}</p>
    })

  return (
    <div>
      <div>
        <span>{data[cardId].id}/{data.length}</span>
      </div>
      <div>
        <span>{data[cardId].name.first} {data[cardId].name.last}</span>
        <h4>From: <span>{data[cardId].city}, {data[cardId].country}</span></h4>
        <h4>Job Title: <span>{data[cardId].title}</span></h4>
        <h4>Employer: <span>{data[cardId].employer}</span></h4>
        <h4>Favorite Movies: {displayMovies}</h4>
      </div>
    </div>
  )
}
