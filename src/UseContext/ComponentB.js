import React, { useContext } from 'react'
import {CustomNameContext} from './MainComponent'

function ComponentB() {
  const myCustomData = useContext(CustomNameContext)
  return (
    <div>
      <h1>user's age is {myCustomData.age}</h1>
    </div>
  )
}

export default ComponentB