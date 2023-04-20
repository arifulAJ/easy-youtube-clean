import { Box, Typography, Grid } from "@mui/material";
const StackPlayList = ({ item, onVideoSelect, vid, currentIndex, index }) => {
  const { title, description, thumbnails } = item;

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "flex-start",
          justifyContent: "flex-start",

          boxSizing: "border-box",
          alignItems: "center",
          border: "1px solid gray",
          borderRadius: "3px",
          padding: "2px",
        }}
        onClick={() => onVideoSelect(vid[index])}
      >
        <Box>
          <img
            style={{ width: "140px" }}
            src={thumbnails.medium?.url}
            alt="alt"
          />
        </Box>
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{ fontWeight: "500", fontFamily: "sans-serif" }}
            variant="body"
          >
            {title}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
export default StackPlayList;
