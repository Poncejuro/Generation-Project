import '../FriendCards/FriendCards.css'

export const FriendCards = ({name, img, rol, bio, alt, imgSize }) => {


  return (
      <>
      
          <div className="card-Friends">
              <h2>{name}</h2>
              <img src={img} alt={alt}  style={{ width: '150px', height: '150px', margin: 'auto', display:'block' }}/>
              <p className='rol'>{rol}</p>
              <p>{bio}</p>
          </div> 
      </>
    );
}