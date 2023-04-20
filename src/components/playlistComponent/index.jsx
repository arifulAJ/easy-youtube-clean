import { Container, Grid } from "@mui/material";

import PlaylistCardItem from "./PlaylistCardItem";
import { useStoreState } from "easy-peasy";

const PlaylistComponents = () => {
  const { data, isLoading } = useStoreState((state) => state.playlists);

  const makeArrayPlaylist = Object.values(data);

  return (
    <>
      {isLoading ? (
        <div style={{ marginTop: "64px" }}>
          <h1>loading....</h1>
        </div>
      ) : (
        <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
          {makeArrayPlaylist.length > 0 && (
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {makeArrayPlaylist.map((item) => (
                <Grid item xs={12} md={6} lg={3}>
                  <PlaylistCardItem
                    key={item?.playlistId}
                    playlistId={item.playlistId}
                    playListThumbnail={item.playlistThumbnail}
                    playListTitle={item.playlistTitle}
                    channelTitle={item.channelTitle}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      )}
      {/* <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        {error} please Provide Valid ID
      </Alert> */}
      {/* <ErrorMessage /> */}
    </>
  );
};
export default PlaylistComponents;
