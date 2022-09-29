import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    if(event.target.value!==" ")
    {
      setText(event.target.value);
    }
  };
  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text has been converted to Uppercase (ᵔ‿ᵔ)","success");
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text has been converted to Lowercase (ᵔ‿ᵔ)","success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text has been removed from textbox (ᵔ‿ᵔ)","success");
  };

  const wordCount = (words) => {
    const w = words.split(/\s+/);
    return w.filter((word) => word !== "").length;
  };

  const removeSpaces = () => {
    let txt = text.replace(/\s+/g, ' ');
    setText(txt);
    props.showAlert("Extra spaces have been removed (ᵔ‿ᵔ)","success");
  };

  const copyText = () => {
    let txt = document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Text has been copied (ᵔ‿ᵔ)","success");
  };

  return (
    <>
      <div
        className={`container text-${props.mode === "dark" ? "white" : "#042743 "
          } bg-${props.mode === "dark" ? "#042743 " : "white"}`}
      >
        <h3 className="mb-3">{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="10"
            value={text}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button
          type="button"
          className={`btn btn-${props.mode==='light' ? 'primary' : props.mode} mx-1 my-1`}
          onClick={handleUppercase}
          disabled={text.length===0}        >
          Convert to UPPERCASE
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='light' ? 'primary' : props.mode} mx-1 my-1`}
          onClick={handleLowercase}
          disabled={text.length===0}
        >
          Convert to lowercase
        </button>
        <button type="button" className={`btn btn-${props.mode==='light' ? 'primary' : props.mode} mx-1 my-1`} 
        onClick={handleClear} disabled={text.length===0}>
          Clear Text
          
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='light' ? 'primary' : props.mode} mx-1 my-1`}
          onClick={copyText}
          disabled={text.length===0}
        >
          Copy Text
        </button>
        <button
          type="button"
          className={`btn btn-${props.mode==='light' ? 'primary' : props.mode} mx-1 my-1`}
          onClick={removeSpaces}
          disabled={text.length===0}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-3 text-${props.mode === "dark" ? "white" : "#042743 "
          } bg-${props.mode === "dark" ? "#042743 " : "white"}`}
      >
        <h4>Your text summary</h4>
        <p>
          {wordCount(text)}{wordCount(text)>1 ? ' words' : ' word'}, {text.length}{text.length>1 ? ' characters' : ' character'}.
        </p>
        <p>
          You can read it in around {wordCount(text)>0?(text.length * 0.008).toFixed(2):0} seconds.
        </p>
        <h4>Preview text</h4>
        <p>{(text.length)>0 ? text : 'Nothing to preview...'}</p>
      </div>
    </>
  );
};

export default TextForm;
