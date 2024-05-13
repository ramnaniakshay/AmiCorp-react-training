import React, {useReducer} from 'react'

//reducer action.js increment decrement function

const reducer = (state,action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count+1}
            break;
        case 'DECREMENT':
            return {count: state.count-1}
            break;
        default:
            return state
            break;
    }
}
// multiplier 
// reset => 0

function ExampleUseReducer() {
    //const count = 0;
    // const [count,setCount] = useState(0)
    const [state, dispatch] = useReducer( reducer, {count: 0})
  return (
    <div>
        <hr/>
        <h1> example of use reducer </h1>
        <h2> Current count is  {state.count}</h2>
        <button type='button'
        onClick={() => dispatch({ type: 'INCREMENT'})}
        >Increment button </button>
        <br/>
        <button type='button'
         onClick={() => dispatch({ type: 'DECREMENT'})}
        >Decrement button </button>
        <hr/>
        
    </div>
  )
}

export default ExampleUseReducer