import React, { useEffect, useState } from 'react'
import axios from 'axios'

    function RandomUsers() {
    const [fetchedData, setFetchedData] = useState(null)
    const [loading,setLoading] = useState(true)

    const baseURL = "https://randomuser.me/api/"

    const apiURL = baseURL+"?results=1"

    useEffect( () =>{
            async function apiCalledData(){
            try {
                const response = await axios.get(apiURL)
                setFetchedData(response.data.results[0])
                //setError(false)
                setLoading(false)
                
            } catch (error) {
                console.log("error in fetching api", error.message);
            }
        }
        apiCalledData();
    },{setFetchedData})
    console.log(fetchedData);
   
    if(loading==true){
        return <div> Loading data please wait for a while </div>
    }

  return (
    <div>
        <h1>Random user data</h1>
        <p>user's name is {fetchedData.name.first}</p>
        <img src={fetchedData.picture.large} />
    </div>
  )
}

export default RandomUsers
