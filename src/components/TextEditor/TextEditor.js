import React from 'react'
import { useState, useRef } from 'react';
import styles from "./TextEditor.module.scss";
import { useHistory } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Creatable from 'react-select/creatable';
import { Button } from '@mui/material';
import { storage } from '../../config/config';
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../../config/config';
import { TextEditor } from 'create-our-text-editor';
import { useTheme } from "@mui/material/styles";

const BlogEditor = () => {
  const history = useHistory();
  const theme = useTheme();
  const fileInputRef = useRef();
  const userName = useSelector((state) => state.userReducer.user.username);
  const [color, setColor] = useState('#000');
  const [buttons, setButtons] = useState({bold: false, italic: false, underline:false,
                          color: false, image: false, justifyLeft: false, justifyRight: false, 
                          justifyCenter: false, justifyFull: false});
  const textRef = useRef(null);
  const mainColor = theme.palette.text.main;
  const pressedColor = '#4a148c';
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
    history.push('/blog');
  }

  const changeText = (text) => {
    setText(text);
  }

  const handleButtons = (name, buttonState) => {
    setButtons(prev => {
      return {...prev, [name]:!buttonState}
    })                   
  }

  const handleColor = (color) => {
    setColor(color);
  }


  return (
      <div className={styles["main-container"]}>
        <div>
            <input className={styles["title"]} type="text" id="title" name="title" placeholder='Title' onChange={e => setTitle(e.target.value)}/>
            <TextEditor main={mainColor} pressed={pressedColor} buttons={buttons} color={color} handleButtons={handleButtons} handleColor={handleColor} 
                        textRef={textRef} fileInputRef={fileInputRef} changeText={changeText} storage={storage}/>
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

export default BlogEditor