import '../styles/Cards.css'

export const Cards = ({title,text,logo,imgSize,alt,cardSizeW,cardSizeH,title4, margin}) => {
    return (
        <>
            <div className="card" style={{width:cardSizeW, height:cardSizeH, margin: margin}}>
                <img src={logo}
                     style={{width:imgSize}}
                     alt ={alt} 
                />
                <h1>{title}</h1>
                <p>{title4}</p>
                <p className='tex-down'>{text}</p>
            </div> 
        </>
      );
}

