import '../FriendCards/FriendCards.css'
import { Button } from "react-bootstrap";

export const FriendCards = ({ name, photo, rol, bio, alt}) => {


    return (
        <>

            <div className="card-Friends">
                <h2>{name}</h2>
                <img src={photo} alt={alt} style={{ width: '150px', height: '150px', margin: 'auto', display: 'block' }} />
                <p className='rol'>{rol}</p>
                <p className="peopleBio">{bio}</p>
                <Button id="peopleFollowButton" variant="success" href="#">
                    Seguir
                </Button>
            </div>
        </>
    );
}