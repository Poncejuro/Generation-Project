
export const FriendCards = ({name, img, rol, bio, alt }) => {
  return (
      <>
          <div className="card">
              <h1>{name}</h1>
              <img src={img} alt={alt}/>
              <p>{rol}</p>
              <p>{bio}</p>
          </div> 
      </>
    );
}