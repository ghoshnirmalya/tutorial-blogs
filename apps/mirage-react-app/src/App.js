import React, { useState, useEffect } from "react"

export default function App() {
  let [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch("/api/dogs")
      .then(res => res.json())
      .then(json => {
        setDogs(json.dogs)
      })
  }, [])

  return (
    <ul data-testid="dogs">
      {dogs.map(dog => (
        <li key={dog.id} data-testid={`dog-${dog.id}`}>
          {dog.name}
        </li>
      ))}
    </ul>
  )
}
