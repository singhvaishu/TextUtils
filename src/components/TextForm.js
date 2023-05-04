import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success");
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success");
    }
    const handleClearClick = () => {

        let newText = "";
        setText(newText);
        props.showAlert("converted to clear!", "success");
    }
    const reversed = () => {

        let splitWord = text.split("");
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords;
        setText(newText);
        props.showAlert("converted to reversed!", "success");
    }
    const copyText = () => {

        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("copy to clipboards!", "success");

    }

    const handleonChange = (event) => {

        setText(event.target.value)

    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1>
                    {props.heading}
                </h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743" }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} > Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} > Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} > Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={reversed} > reverse text button</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText} > Copy text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1>Your text summary </h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length}characters</p>
                <p>{0.008 * text.split("").filter((element) => { return element.length !== 0 }).length}Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}


