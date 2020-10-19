import React,{ Component } from "react";
import { ITextBox, TextPropsExposed, TextState } from "./ITextBox";


export abstract class TextBoxCreator extends React.Component<TextPropsExposed,TextState> {

  public abstract factory(): ITextBox;

  exposedPropsDefault:TextPropsExposed= {
    style: {},
    value:''
  }

  public render(){
    const inputBox = this.factory();
    return inputBox.render();
  }
}