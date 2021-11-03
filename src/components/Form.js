/* eslint-disable no-useless-escape */
import React, { useState } from "react";

export const Form = ({ urlText }) => {
  let inputStyle = {
    border: "red 10px ",
  };
  const [text, setText] = useState("");
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
      inputStyle = {
        outline: "solid 1px hsl(0, 87%, 67%)",
      };
      alert("wrong url");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit} className="form">
          <div>
            <input
              onChange={(e) => setText(e.target.value)}
              style={inputStyle}
              type="text"
              size="30"
              id="url"
              placeholder="Shorten a link here..."
            />
          </div>
          <div>
            <button type="submit" className="main-btn">
              Shorten It!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
