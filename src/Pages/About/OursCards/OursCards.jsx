import './OursCards.css'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const OursCards = ({name, rol,img,text,linkedin,git}) => {
    return (
        <>
            <div className="card-Our">
                <img src={img} alt="Imagen personal" className='Ours-img'/>
                <div className='info-box-ours'>
                    <h2> {name}</h2>
                    <h5> {rol}</h5>
                    <p>{text}</p>
                    <Link to={linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{color:'inherit'}}>
                        <AiFillLinkedin className='symbols-card' />
                    </Link>
                    <Link to={git}
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{color:'inherit', margin:'5px'}}>
                        <AiFillGithub className='symbols-card' />
                    </Link>
                </div>
            </div> 
        </>
      );
}

