import React, { useState } from 'react'

//restrict the user below 0 then it should throw toast message negative value is not allowed

function MyCounter() {
    //var count = 100;
    const [count,setCount] = useState(0)
    function increment (){
        //alert("called increment function")
        //count++;
        //console.log(count);
        setCount(count+1)
        // taking count 's default value which is 0 
        //setcount (count = count + 1)
    }
    function decrement(){
        //alert("called Decrement function")
        //count--;
        console.log(count);
    }
    //multiplier => count
    //divider => count
  return (
    <>
    <h2>Current Count is {count}</h2>
    <button type='button' onClick={() => setCount(count+1) }>+</button>
    <button type='button' onClick={() => setCount(count-1) }>-</button>
    <h1>M y counter </h1>
    </>
  )
}

export default MyCounter