import { Box, Typography, Grid } from "@mui/material";
const StackPlayList = ({ item, onVideoSelect, vid, currentIndex, index }) => {
  const { title, description, thumbnails } = item;
  const videoUrl =
    "https://www.youtube.com/watch?v=dS3dMXflzag&list=PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl"; // URL entered by the user

  // Regular expression to extract the video ID from the URL
  const regex = /[?&]v=([^&#]*)/;

  // Extract the video ID from the URL using the regular expression
  const match = regex.exec(videoUrl);
  const videoId = match && match[1];

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
        // onClick={() => onVideoSelect(videoId)}
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
