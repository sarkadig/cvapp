import React, {useState,useEffect} from 'react';

export default function Result(props) {

  const [data, setData] = useState([]);

  const getData = async () => {
     await fetch('cv.json')
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
    
  }

  useEffect(()=>{
    getData()
  },[])

  return(
    <div className="result">
      
    </div>
  )

};