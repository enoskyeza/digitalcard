import React from 'react'
import Card from './components/Card'
import data from './components/data'

import './App.css'

function App() {
  const people = data.map(person => {
      return <Card
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
