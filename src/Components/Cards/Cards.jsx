import './Cards.css'

export const Cards = ({title,text}) => {
    return (
        <>
            <div className="card">
                <h1>{title}</h1>
                <p className='tex-down'>{text}</p>
            </div> 
        </>
      );
}

