import './OursCards.css'

export const OursCards = ({name, rol,img}) => {
    return (
        <>
            <div className="card-Our">
                <img src={img} alt="Imagen personal" className='Ours-img'/>
                <h3>{name}</h3>
                <p>{rol}</p>
            </div> 
        </>
      );
}

