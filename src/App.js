import './App.css';
import Messege from "./Messege"
import React, { useEffect, useState } from 'react'
import { IconButton,Button,FormControl,InputLabel,Input } from '@material-ui/core';
import { db } from './Firebase';
import firebase from "firebase"
import FlipMove from "react-flip-move"
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input,setInput]=useState("");
  const [messeges,setMesseges]=useState([])
  const [username,setUsername]=useState("")

  useEffect(()=>{
    db.collection('messeges')
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot=>{
      setMesseges(snapshot.docs.map(doc=>({id:doc.id,messege:doc.data()})))
    });
  },[])
  
  useEffect(()=>{
    setUsername(prompt('Please Enter your name'))
  },[]);
  
  const sendMessege=(event)=>{
    event.preventDefault();
    db.collection("messeges").add({
      messege:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
     setInput("");
  }



  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Facebook_Messenger_logo_2013.svg/100px-Facebook_Messenger_logo_2013.svg.png" alt="logo" />
      <h1>Messenger App </h1>
      <h2 className="heading">Welcome  {username} to this app </h2>
      <form className="app__form">
      <FormControl className="app__formControl">
        <InputLabel >Enter a Message</InputLabel>
        <Input className="app__input" placeholder="Enter a messege.." value={input} onChange={event=>setInput(event.target.value)} />

        <IconButton className="app__iconButton"
        disabled={!input} variant="contained" color="secondary" type="submit" onClick={sendMessege}
        >
        <Button disabled={!input} variant="contained" color="secondary" type="submit"> send messege</Button>
         
        </IconButton>
      </FormControl>
      </form >
      <FlipMove>
      {
        messeges.map(({id,messege})=>(
          <Messege key={id} username={username} messege={messege} />
          // <p>{messege}</p>
        ))
      }
      </FlipMove>

    </div>
  );
}

export default App;
