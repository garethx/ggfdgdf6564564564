import React,{useState} from "react";
import "./styles.css";
import {B4TextBoxCreator} from './components/TextBox';

export default function App() {

 const [greetings,setGreeting]=  useState('');

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <B4TextBoxCreator value={greetings}  onChange={(e)=> setGreeting(e.target.value)} />
      <br/>
      {/* <span>**{greetings}</span> */}
      {/* {
        b4InputBox.render()
      } */}
    </div>
  );
}
