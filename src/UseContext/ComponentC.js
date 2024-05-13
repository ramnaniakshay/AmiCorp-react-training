import React, { useContext } from 'react'
import {CustomNameContext} from './MainComponent'

function ComponentC() {
  const value = useContext(CustomNameContext)
  return (
    <div>
      <h1>user's age is {value.age}</h1>
    </div>
  )
}

export default ComponentC