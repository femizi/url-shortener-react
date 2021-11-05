import React, { useEffect, useState } from "react";
import { Answer } from "./Answer";
import { Form } from "./Form";

export const Shortener = () => {
  const [isLoading, setIsLoading] = useState(true);
 const [state, setstate] = useState([])
  const [stored, setStored] = useState( localStorage.getItem('link1') || false)
  const [term, setTerm] = useState("");
  const [url, setUrl] = useState([]);
  useEffect(() => {
    if (term === "") {
    } else {
      fetch(`https://api.shrtco.de/v2/shorten?url=${term}`)
        .then((res) => res.json())
        .then((data) => {
          if(data.ok){
            setUrl(data);
            
         setstate(data)
          setIsLoading(false);

          }else{
            alert('restricted url')
          }
          
        })
        .catch((err) => console.log(err));
    }
  }, [term]);
  useEffect(()=>{
    if (state.length=== 0){

    }else{
      const temp = JSON.stringify(state)
      
      localStorage.setItem('link1', temp)
      console.log(localStorage.getItem('link1'))
      setStored(true)
    }
  },[state])
  useEffect(()=>{
    if (stored === false){

    }else{
    let  perm = localStorage.getItem('link1')
    let loadedPerm = JSON.parse(perm)
    setUrl(loadedPerm)
    setIsLoading(false)
    }
  },[stored])
  function copyLink(data) {
    navigator.clipboard.writeText(data);
    alert(`Your shortened Url "${data}" has been copied`);
  }

  return (
    <div>
      <div className="wrapper">
        <Form urlText={(text) => setTerm(text)} />
        {isLoading ? (
          <div> </div>
        ) : (
          <Answer url={url} copyLink={copyLink} />
        )}
      </div>
    </div>
  );
};
