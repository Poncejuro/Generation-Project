// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Unstable_Grid2";

// export const FeedCards = ({
//   title,
//   text,
//   cardSizeW,
//   cardSizeH,
//   logo,
//   alt,
//   imgSize,
// }) => {
//   return (
//     <>
//       {/* <div className="card" style={{ width: cardSizeW, height: "auto" }}> */}
//       <div className="card">
//         {/* <Card> */}
//         <Box
//           sx={{
//             m: 2,
//             // display: "flex",
//             // justifyContent: "center",
//             // alignItems: "center",
//             // alignContent: "center",
//           }}
//         >
//           <Grid container spacing={3}>
//             <Grid xs={3}>
//               {/* <CardMedia sx={{ height: 140 }} image={logo} /> */}
//               <img src={logo} style={{ width: cardSizeH, height: imgSize }} />
//             </Grid>
//             <Grid xs={9}>
//               {/* <CardContent> */}
//               <h3>{title}</h3>
//               <p>{text}</p>
//               {/* </CardContent> */}
//             </Grid>
//           </Grid>
//         </Box>
//         {/* </Card> */}
//       </div>
//     </>
//   );
// };
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export const FeedCards = ({
  title,
  text,
  cardSizeW,
  cardSizeH,
  logo,
  alt,
  imgSize,
  rol,
}) => {
  return (
    <>
      <div className="card" style={{ width: cardSizeW, height: "auto" }}>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2 col-xs-12 col-md-3">
            <img src={logo} style={{ width: imgSize }} alt={alt} />
          </div>
          <div className="p-2 col-xs-12 col-md-9">
            <h3>{title}</h3>
            <p>{rol}</p>
            <p>{text}</p>
          </div>
        </Stack>

        <Button variant="success" href="#">
          Eliminar
        </Button>
      </div>
    </>
  );
};
