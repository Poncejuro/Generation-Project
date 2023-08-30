import './FriendCards.css'
export const FriendCards = ({name, img, rol, bio, alt, imgSize }) => {


  return (
      <>
      
          <div className="card">
              <h1>{name}</h1>
              <img src={img} alt={alt}  style={{ width: '150px', height: '150px', margin: 'auto', display:'block' }}/>
              <p className='rol'>{rol}</p>
              <p>{bio}</p>
          </div> 
      </>
    );
}