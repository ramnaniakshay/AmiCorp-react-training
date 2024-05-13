import React, { useState } from 'react'

function WelcomeUser() {
    const [userName,setUserName] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        //console.log("entered user's name is ",userName);
        alert(`welcome to our app ${userName} ji`)
    }
    console.log("after entering name",userName);
  return (
    <div>
        <h1>Welcome user</h1>
        <form>
            <label>Name of a user </label>
            <input
            type='text'
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={handleSubmit} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default WelcomeUser