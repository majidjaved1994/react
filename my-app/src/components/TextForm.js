import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCopyClick = ()=> {
        navigator.clipboard.writeText(text);

    }

    const handleSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className={`container text-${props.mode==='light'? 'dark':'light'}`}>
    <h3 className="mb-3">{props.heading}</h3>
    <div className="mb-3">
        <textarea rows="8" className="form-control" id="myBox" onChange={handleOnChange} value={text} />
    </div>

    <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>  
    <button disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>  
    <button disabled={text.length===0} onClick={handleCopyClick} className="btn btn-primary mx-1 my-1">Copy Text</button>  
    <button disabled={text.length===0} onClick={handleSpace} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>  
    </div>
    <div className={` container text-${props.mode==='light'? 'dark':'light'}`}>
        <h2 className="mt-3">Your Text Summary</h2>
        {/*<p>{text.length>0? text.trim().split(' ').length : '0'} words and {text.length} characters</p> */}
        <p>{text.trim().split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{text.length>0? 0.008 * text.trim().split(' ').filter((element)=> {return element.length!==0}).length : '0'} Minutes to read</p>
    </div>
    </>
  );
}
