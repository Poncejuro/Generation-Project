import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export const FeedCards = ({
  title,
  text,
  cardSizeW,
  cardSizeH,
  logo,
  alt,
  imgSize,
}) => {
  return (
    <>
      <div className="card" style={{ width: cardSizeW, height: "auto" }}>
        {/* <Row> */}
          {/* <Col xs={12} md={3} className="col-imgr m-1">
            <img src={logo} style={{ width: imgSize }} alt={alt} />
          </Col>
          <Col xs={12} md={9} className="m-1">
            <h3>{title}</h3>
            <p>{text}</p>
          </Col> */}
          <Stack direction="horizontal" gap={3}>
            <div className="p-2 col-xs-12 col-md-3">
              <img src={logo} style={{ width: imgSize }} alt={alt} />
            </div>
            <div className="p-2 col-xs-12 col-md-9">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </Stack>
        {/* </Row> */}
      </div>
    </>
  );
};
