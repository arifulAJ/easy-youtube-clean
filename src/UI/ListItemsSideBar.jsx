import { Box, Paper } from "@mui/material";
import StackPlayList from "../components/playlistComponent/stackPlayList";

const SideBarOfYouTubeVideo = ({
  rightBar,
  handleClick,
  vId,
  currentIndex,
}) => {
  const styles = {
    paper: {
      height: 400,
      overflow: "scroll",
    },
  };
  return (
    <div>
      <Paper style={styles.paper}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "300px",
          }}
        >
          {rightBar.map((item, index) => (
            <StackPlayList
              onVideoSelect={handleClick}
              vid={vId}
              index={index}
              currentIndex={currentIndex}
              item={item}
            />
          ))}
        </Box>
      </Paper>
    </div>
  );
};
export default SideBarOfYouTubeVideo;
const styles = {
  paper: {
    height: 400,
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f5f5f5",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888",
    },
  },
};
