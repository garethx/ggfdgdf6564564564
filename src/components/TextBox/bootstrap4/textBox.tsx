import React,{ Component } from "react";
import { ITextBox, TextPropsInternal,TextState,TextPropsExposed } from "../../../lib/text/ITextBox";


export class B4TextBox extends Component<TextPropsExposed,TextState> implements ITextBox  { 

    componentDidMount(){
        console.log('component did mount');
    }


    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    render() {
      console.log('?');
        return (
        <><input 
                      {...this.B4TextBoxPropsInternal}
                      {...this.props}
                    />
                    <span>?{this.props?.value}</span>
                    </>);

    }

     B4TextBoxPropsInternal: TextPropsInternal = {
        type: 'text',
        className:'b4-text',
    }


}

