import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom';


function CreateTripPage(props) {
  
   const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/")
    }
  },[history]);
 

  return (
    <div>
     <h1>CreateTripPage</h1>
    </div>
  )
}

export default CreateTripPage;
