import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const hanndleUpClick = (e) => {
    //console.log("Uppercase was Clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLowClick = (e) => {
    let text1 = text.toLowerCase();
    setText(text1);
  };
  const handleClearClick = (e) => {
    let cleartext = "";
    setText(cleartext);
  };
  const handleonChange = (e) => {
    //console.log("On Change");
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleonChange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-info mx-2" onClick={hanndleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>
          Clear The Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Yout Text Summary</h1>
        <p>
          Your text has {text.length} characters and {text.split(" ").length}{" "}
          words
        </p>
        <p>
          You need {0.008 * text.split(" ").length} minutes to read this text
        </p>

        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}

export default TextForm;
