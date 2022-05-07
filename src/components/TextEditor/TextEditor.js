import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./TextEditor.module.scss";

const TextEditor = () => {
  const [text, setText] = useState('');
  
  const [bold, setBold] = useState(false);

  const makeBold = (e) => { 
    
    setBold(prev => !prev)

    let textArea=document.getElementById("text");
    let text =textArea.value;
		let indexStart=textArea.selectionStart;
		let indexEnd=textArea.selectionEnd;
    let newText = text.substring(0, indexStart)
    let selected = text.substring(indexStart, indexEnd)

    //effect 
    if(bold) {


    } else {
      selected = selected.toLowerCase();
    }

    newText += selected;
    newText += text.substring(indexEnd)
    textArea.value = newText;
    textArea.append(<b>omoadmow</b>)
    console.log(textArea);
    textArea.focus()
    textArea.selectionStart = indexStart;
    textArea.selectionEnd = indexEnd;
  }

  // all filters
  const changeLetter = (letter) => {
    return letter.toUpperCase();
  }
  
  // changes letter after textarea is changed
  const textChanged = (e) => {
    let text = e.target.value;
    let index = e.target.selectionStart - 1;
    let letter = text[index]
    letter = changeLetter(letter);
    let newText = text.substring(0,index);
    newText += letter;
    newText += text.substring(index + 1)
    e.target.value = newText;
    e.target.selectionStart = index + 1;
    e.target.selectionEnd = index + 1;
  }

  return (
    <div className={styles["main-container"]}>
        <div>
            <input className={styles["title"]} type="text" id="title" name="title" placeholder='Title'/>
            <div  className={styles["buttons-for-text"]}>
              <button name='bold' onClick={makeBold}>make bold</button>
            </div>
            <div 
              className={styles["text"]}
              id='text'
              name="text"
              onChange={e => textChanged(e)}
              contentEditable={true}
              spellCheck={false}
            > </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default TextEditor