
export const FriendCards = ({name, rol, bio}) => {
  return (
      <>
          <div className="card">
              <h1>{name}</h1>
              <p className='tex-down'>{rol}</p>
              <p className='tex-down'>{bio}</p>
          </div> 
      </>
    );
}