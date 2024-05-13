import React, { useContext } from 'react'
import {CustomNameContext} from './MainComponent'

function ComponentA() {
  const userDetails = useContext(CustomNameContext);

  return (
    <div>
      <h1>user's name is {userDetails.name}</h1>
    </div>
  )
}

export default ComponentA