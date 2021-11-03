import React, { useEffect, useState }  from 'react'
import { Answer } from './Answer'
import { Form } from './Form'



export const Shortener = () => {
 
const [isLoading, setIsLoading ] = useState(true)
  const [term, setTerm] = useState('');
const [url, setUrl] = useState([]);
useEffect(() => {
  if (term === ""){

  }else{
    fetch(`https://api.shrtco.de/v2/shorten?url=${term}`)
    .then(res => res.json())
    .then(data => {
      
      setUrl(data);
     
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }}, [term])
  function copyLink(data){
    navigator.clipboard.writeText(data)
    alert(`Your shortened Url "${data}" has been copied`)
}

    return (
        <div>
            <div className="wrapper">
      <Form urlText={(text) => setTerm(text)}/>
     {isLoading ? <h1 >Loading</h1>:
     <Answer url= {url} copyLink={copyLink}/>
     
     }
    </div>
        </div>
    )
    }
