import React,{useState} from 'react'

export default function TextForm(props) {
  
    const handleupClick = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted into Uppercase","success");

    }

    const handleonChange = (event)=>{
        setText(event.target.value);

    }

    const handleupClicklower = ()=>{
        const newtxt = text.toLowerCase();
        setText(newtxt);
        props.showAlert("Text Converted into Lowercase","success");

    }

    const clearText = ()=>{
        const newwtxt = " ";
        setText(newwtxt);
        props.showAlert("Text is Cleared","success");
    }

    const handleCopy = ()=>{
        const text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard","success");

    }

    const handleExtraSpaces = ()=>{
        const newText  = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
       
    }


    const [text, setText] = useState("");

    return (
     <>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='light'?'#3b5274':'white', color: props.mode ==='dark'?'black':'white'}} value={text} onChange={handleonChange} rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleupClick}>Click for toUpperCase</button>
           <button className="btn btn-primary mx-2" onClick={handleupClicklower}>Click For LowerCase</button>
           <button className="btn btn-primary mx-2" onClick={clearText}>Click for ClearText</button>
           <button className="btn btn-primary mx-2" onClick={handleCopy}>Click for Text Copy</button>
           <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Click for Remove Spaces</button>

        </div>
        <div className="container my-20" style={{color: props.mode ==='dark'?'white':'black'}}>
            <h1>In this Text</h1>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes in reading</p>
            <h2>Prview</h2>
            <p>{text.length>0?text:"Enter Something to Preview here"}</p>
        </div>
    </>
    )
}
