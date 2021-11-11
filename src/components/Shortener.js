import React, { useEffect, useState } from "react";
import { Answer } from "./Answer";
import { Form } from "./Form";

export const Shortener = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setstate] = useState([]);
  const [stored, setStored] = useState(localStorage.getItem("link1") || false);
  const [term, setTerm] = useState("");
  const [url, setUrl] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [tester, setTester] = useState([])
  // main function that takes url from form and submits it
  useEffect(() => {
    if (term === "") {
    } else {
      setSpinner(true);

      fetch(`https://api.shrtco.de/v2/shorten?url=${term}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            setUrl(data);
            setstate(data);
            setTester(tester => [...tester, data])
            setIsLoading(false);
            setSpinner(false);
            
          } else {
            alert("restricted url");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [term]);
  // takes data from the first useEffect and stores in local storage
  useEffect(() => {
    if (state.length === 0) {
    } else {
      const temp = JSON.stringify(state);
      const newTemp = JSON.stringify(tester)
      localStorage.setItem("mainlinks", newTemp)
      console.log(newTemp)
      localStorage.setItem("link1", temp);

      setStored(true);
    }
  }, [state,tester]);
  // gets data from local storage and renders 
  useEffect(() => {
    if (stored === false) {
    } else {
      let perm = localStorage.getItem("link1");
      let loadedPerm = JSON.parse(perm);
      setUrl(loadedPerm);
      setIsLoading(false);
    }
  }, [stored]);
  // copies to clipboard on click 
  function copyLink(data) {
    navigator.clipboard.writeText(data);
    alert(`Your shortened Url "${data}" has been copied`);
    console.log(tester)
  }

  return (
    <div>
      <div className="wrapper">
        <Form urlText={(text) => setTerm(text)} spinner={spinner} />
        {isLoading ? <div className="loader" >Loading...</div> : <Answer url={url} copyLink={copyLink} />}
       
      </div>
    </div>
  );
};
