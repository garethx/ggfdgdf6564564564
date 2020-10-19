import { ITextBox, TextState,TextPropsExposed } from "../../../lib/text/ITextBox";
import { TextBoxCreator} from "../../../lib/text/textBoxCreator";
import {B4TextBox} from './textBox';

export class B4TextBoxCreator extends TextBoxCreator {
  constructor(props: TextPropsExposed,state: TextState){
    super(props);
  }
  public factory(): ITextBox {
    return new B4TextBox(this.props,this.state);
  }
}

