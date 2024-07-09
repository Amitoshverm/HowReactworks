import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const OnClear = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = ''
        setText(newText);
    }
    
    const handleLowerCaseClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    

const [text, setText] = useState('');
  return (
    <>
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
       <textarea className="form-control" value={text} id="myBox" rows="9" onChange={handleOnChange}></textarea>
   </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick} >Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={OnClear} >Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces} >Remove space</button>
    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
    </div>
    </>
  )
}
