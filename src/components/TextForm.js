import React, {useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState("Enter text here");

const handleOnChange = (event) =>{
    setText(event.target.value)
}
const handleOnClick = (event) =>{
    let newText = text.toUpperCase();
    setText(newText);
}
  return (
    <div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange = {handleOnChange} rows="3"></textarea>
            <button className="btn-primary btn my-3" onClick={handleOnClick}>Convert To Uppercase</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>
                {text.split(" ").length} Words<br></br>
                {text.length} Characters
            </p>
        </div>
    </div>
  )
}
