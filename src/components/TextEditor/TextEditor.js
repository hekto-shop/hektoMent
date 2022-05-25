import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { target } from '../../assets/icons';
import styles from "./TextEditor.module.scss";

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import ImageIcon from '@mui/icons-material/Image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Creatable, { useCreatable } from 'react-select/creatable';
import { Button } from '@mui/material';
import { SketchPicker, BlockPicker } from 'react-color';
import { storage } from '../../config/config';
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../../config/config';


const TextEditor = () => {

  const fileInputRef = useRef();
  const uid = useSelector((state) => state.userReducer.user.uid);
  const userName = useSelector((state) => state.userReducer.user.username);
  const [color, setColor] = useState('#000');
  const [buttons, setButtons] = useState({bold: false, italic: false, underline:false,
                          color: false, image: false, justifyLeft: false, justifyRight: false, 
                          justifyCenter: false, justifyFull: false});
  const textRef = useRef(null);

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState();
  const [category, setCategory] = useState({});
  let categories = [{label: 'Hobbies', value: 1}, {label: 'Women', value: 2}, {label: 'Men', value: 3},
                    {label: 'Shopping', value: 4}, {label: 'Nature', value: 5}, {label: 'Health', value: 6}]
  let tagsArr = [{label: 'general', value: 1}, {label: 'new', value: 2}, {label: 'business', value: 3},
                    {label: 'blog', value: 4}]

  const blogsCollectionRef = collection(db, "blogs");

  const createPost = async () => {
    let today = new Date()
    let submitTags = [];
    if(typeof tags !== 'undefined') {
      tags.forEach(elem => {
        submitTags.push(elem.label)
      })
    }
    let submitCategory = '';
    if(typeof category.label !== 'undefined') {
      submitCategory = category.label;
    }
    await addDoc(blogsCollectionRef, {title, text, author:userName, date:today, category:submitCategory, tag:submitTags});
  }

  const buttonPressed = (name) => {
    textRef.current.focus();
    const buttonState = buttons[name];
    setButtons(prev => {
      return {...prev, [name]:!buttonState}
    })
    document.execCommand(name)
  }

  const changeColor = (name) => {
    const buttonState = buttons[name];
    setButtons(prev => {
      return {...prev, [name]:!buttonState}
    })
  }

  const closeColor = (name) => {
    const buttonState = buttons[name];
    setButtons(prev => {
      return {...prev, [name]:!buttonState}
    })
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, color);
  }

  function GSel() {
      var d = document;
      if (d.selection) {
          return d.selection.type == "Text" ? d.selection : null;
      }
      if (window.getSelection) {
          return window.getSelection();
      }
      return null;
  }

  function CRngFunc() {
      var s = GSel();
      if (s) {
          if (s.createRange) {
              return s.createRange();
          }
          if (s.rangeCount && s.getRangeAt) {
              return s.getRangeAt(0);
          }
      }
      return null;
  }

  function SelFunc(rng) {
      if (rng.select) {
          rng.select();
      } else {
          var sel = GSel();
          if (sel.removeAllRanges && sel.addRange) {
              sel.removeAllRanges();
              sel.addRange(rng);
          }
      }
  }

  const focus = () => {
    var rng = null;
    rng = CRngFunc();
    setTimeout(function() {
      if (rng) {
        SelFunc(rng);
      }
    }, 1);
  }

  const uploadImage = (userId, name, file) => {
    return new Promise((resolve, reject) => {
      let randomImageNameGenerator = (Math.random() + 1).toString(36).substring(2);
      const filePath = `Blog Images/${randomImageNameGenerator}`;
      const fileRef = storage.ref().child(filePath);
      const uploadTask = fileRef.put(file);
  
      uploadTask.on(
        "state_changed",
        null,
        (error) => reject(error),
        () => {
          resolve(uploadTask.snapshot.ref);
        }
      );
    });
  };


  const fileChange = async (files) => {
    const ref = await uploadImage(uid,files[0].name, files[0]);
    const downloadUrl = await ref.getDownloadURL();
    document.execCommand('insertImage', false, downloadUrl);
    
  };


  const textClicked = (e) => {
    console.log(tags)
    console.log(category)
    console.log('d')
  }
  

  return (
      <div className={styles["main-container"]}>
        <div>
            <input className={styles["title"]} type="text" id="title" name="title" placeholder='Title' onChange={e => setTitle(e.target.value)}/>
            <div  className={styles["buttons-for-text"]}>
              <Button color={buttons['bold'] ? 'secondary' :'text'} name='bold' onClick={() => buttonPressed('bold')}>
                <FormatBoldIcon />
              </Button>
              <Button  color={buttons["italic"] ? 'secondary' :'text'} name='italic' onClick={() => buttonPressed('italic')}>
                <FormatItalicIcon />
              </Button>
              <Button color={buttons["underline"] ? 'secondary' :'text'} name='underline' onClick={() => buttonPressed('underline')}>
                <FormatUnderlinedIcon />
              </Button>
              <button  className={styles["btn"]} style={{ color: color}} name='color' onClick={() => changeColor('color')}>
                <FormatColorTextIcon />
              </button>
              {buttons.color && 
                  <div className={styles["color-picker"]} onMouseDown={() => focus()} >
                    <SketchPicker className={styles["picker"]} color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>
                    <Button className={styles["cancel"]} color='secondary' onClick={() => closeColor('color')} >
                        Close
                    </Button>
                  </div>
              }
              <input
                type="file"
                accept=".png,.jpg"
                className={styles["file-input"]}
                ref={fileInputRef}
                onChange={(e) => fileChange(e.target.files)}
              />
              <Button className={styles["upload-img"]}  color='text' name='image' onClick={() => fileInputRef.current.click()} >
                <ImageIcon />
              </Button>
              <Button color={buttons["justifyLeft"] ? 'secondary' :'text'}  name='justifyLeft' onClick={() => buttonPressed('justifyLeft')} >
                <FormatAlignLeftIcon />
              </Button>
              <Button color={buttons["justifyRight"] ? 'secondary' :'text'} name='justifyRight' onClick={() => buttonPressed('justifyRight')}>
                <FormatAlignRightIcon />
              </Button>
              <Button color={buttons["justifyCenter"] ? 'secondary' :'text'} name='justifyCenter' onClick={() => buttonPressed('justifyCenter')}>
                <FormatAlignCenterIcon />
              </Button>
              <Button  color={buttons["justifyFull"] ? 'secondary' :'text'} name='justifyFull' onClick={() => buttonPressed('justifyFull')}>
                <FormatAlignJustifyIcon />
              </Button>
            </div>
            <div 
              className={styles["text"]}
              id='text'
              name="text"
              contentEditable={true}
              spellCheck={false}
              ref={textRef}
              onInput={e => setText(e.target.innerHTML)}
            > 
            
            </div>
        </div>
        <div className={styles["side"]}>
          <div className={styles["publish-button"]}>
            <Button color='secondary' variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={createPost}>
              Publish
            </Button>
          </div>
          <div className={styles["category"]}>
            <div className={styles["side-title"]}>Category</div>
            <Creatable  onChange={value => setCategory(value)} value={category} options={categories}/>
          </div>
          <div className={styles["tag"]}>
            <div className={styles["side-title"]}>Tag</div>
            <Creatable onChange={value => setTags(value)} isMulti value={tags}  options={tagsArr}/>
          </div>
        </div>    
      </div>
  )
}

export default TextEditor