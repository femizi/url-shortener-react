/* eslint-disable no-useless-escape */
import React, { useState } from "react";

export const Form = ({ urlText, spinner }) => {
 let name = "Shorten It!"
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(true)
  function ValidateUrl(link) {
    var urlFormat =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (link.match(urlFormat)) {
      return true;
    } else {
      return false;
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (ValidateUrl(text)) {
      urlText(text);
    } else {
      setPressed(false);
      alert("Please input a URL");
    }
  };
  if(spinner === true){
    name = "Please Wait"
  }else {
    name = "Shorten It"
  }

  return (
    <div>
      <div className = "form-wrapper">
        <form onSubmit={onSubmit} className="form">
          <div>
            <input
              onChange={(e) => setText(e.target.value)}
              style={pressed? {outline:"none"}:{outline:"1px solid hsl(0, 87%, 67%)"}}
              type="text"
              size="30"
              id="url"
              placeholder="Shorten a link here..."
            />
          </div>
          <div>
            <button type="submit" className="main-btn">
              {name}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
