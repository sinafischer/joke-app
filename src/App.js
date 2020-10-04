import React, { useState, useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then((response) => response.json())
      .then((data) => {
        setJokes(data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  console.log(jokes)

  return (
    <>
      {jokes &&
        jokes.map((joke) => {
          return (
            <ul key={joke.id}>
              <li>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
              </li>
            </ul>
          )
        })}
    </>
  )
}

export default App
