import React,{ Component } from "react";

export interface ITextBox extends Component {
   render(): React.ReactNode;
}

// export type TextBoxProps = {
//   type: string,
//   style: {[k:string]:string},
//   onFocus(cb: Function):Function,
//   onClick(cb:Function):Function,
//   onChange(cb: Function):Function,
//   className:string
// }


export type TextPropsExposed =  {
  style: {[k:string]:string},
  onFocus?:(cb)=>{cb},
  onClick?:(cb)=>{cb},
  onChange?:(cb)=>{cb},
  value: string;
}


export type TextPropsInternal = {
  type: string,
  className:string,
}


export type TextState=  {
  value: string;
}