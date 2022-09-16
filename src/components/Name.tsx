import React, { ReactElement, useEffect, useState } from 'react'
import { NameProps } from './types'

// Renders text given in props one character at a time, like a terminal
export default function Name(props: NameProps): ReactElement {
  const [text, setText] = useState<string>('')
  const [cursor, setCursor] = useState<boolean>(true);
  const [length, setLength] = useState<number>(0)

  /*
   * Creates intervals for the text populating the screen and the cursor blinking after the text has finished.
   * Also specifies a cleanup function to remove the intervals when un-rendered 
   */
  useEffect(() => { 
    //let cursorInterval: NodeJS.Timer | undefined = undefined;
    const textInterval = setInterval(() => addLetter(), 400);
    const cursorInterval = setInterval(() => cursor ? setCursor(false) : setCursor(true), 1000)

    return(() => {
      clearInterval(textInterval);
      clearInterval(cursorInterval);
    });
  });

  function addLetter(): void {
    // While we have not used all the text from props
    if (props.text.length + 1 > length) {
      // Update state with one new letter
      setText(props.text.substr(0, length))
      setLength(length + 1)
    }
  }

  return (
    <div className="name">
      <pre>{text}{cursor ? '_' : ' '}</pre>
    </div>
  )
}
