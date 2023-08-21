//import '../styles/Cards.css'

export const Button  = ({text, color, background, padding, fontSize, width, height, borderRadius}) => {
    return (
        <>
         <button type="button" style={{color: color, 
                                       background:background, 
                                       padding: padding, 
                                       fontSize: fontSize,
                                       height: height,
                                       width: width,
                                       borderRadius: borderRadius,
                                       }}>{text}</button>
        </>
      );
}

