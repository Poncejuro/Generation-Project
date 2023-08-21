import React, {useState} from 'react';

export const Input = ({text, colorBorder, colorBackground, padding, fontSize, width, height, borderRadius, margin}) => {
    const [message, setMessage] = useState('');
    return (
      <>
        <input type="input" id="input" style={{
          colorBorder: colorBorder,
          colorBackground:colorBackground,
          padding: padding,
          fontSize: fontSize,
          width: width,
          height: height,
          borderRadius: borderRadius,
          margin: margin,
        }}
        onChange={e => setMessage(e.target.value)}
        >{text}</input>

      </>
    )
  }