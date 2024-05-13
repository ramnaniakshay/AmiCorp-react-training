import React, {createContext} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CustomNameContext = createContext()

function MainComponent() {
    const userDetails = {name : 'akshay', age: 12}
    const email = "akshayr@cloudthat.com"
    const password = "Admin@123"

  return (
    
    <div>
        <CustomNameContext.Provider value={userDetails}>
            <h1>example of useContext</h1>
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </CustomNameContext.Provider>
        
    </div>
    
  )
}

export default MainComponent