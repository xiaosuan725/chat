import { Descendant } from 'slate';

declare module 'slate' {
  interface BaseElement {
    type: string;
    children: Descendant[];
  }
  // interface BaseText {
  //   text: string;
  //   bold: boolean;
  //   code: boolean;
  //   italic: boolean;
  //   underline: boolean;
  // }
}
