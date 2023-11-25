import React from 'react'
import Card from './components/Card'
import data from './components/data'

import './App.css'

function App() {
  const people = data.map(person => {
      return <Card
                  key = {person.id}
                  {...person}
      />
  })

  console.log(people)

  return (
    <>
      { people }
    </>
  )
}

export default App
