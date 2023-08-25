import Button from "react-bootstrap/Button";

export const FeedCards = ({ title, text, cardSizeW, cardSizeH }) => {
  return (
    <>
      <div className="card" style={{ width: cardSizeW, height: cardSizeH }}>
        <h4>{title}</h4>
        <p className="tex-down">{text}</p>
        <Button variant="success" className="btn">
          Inicio
        </Button>{" "}
      </div>
    </>
  );
};
