import { useStoreActions, useStoreState } from "easy-peasy";
import PlaylistCardItem from "../playlistComponent/PlaylistCardItem";
import { Grid } from "@mui/material";

const FavoriteComponent = () => {
  const favorite = useStoreState((state) => state.favorites.items);
  const makeArrayPlaylist = Object.values(favorite);

  return (
    <div style={{ paddingTop: "64px" }}>
      <h1>favorite</h1>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {makeArrayPlaylist.map((i) => (
          <Grid item xs={12} md={6} lg={3}>
            <PlaylistCardItem
              playlistId={i.playlistId}
              playListThumbnail={i.playlistThumbnail}
              playListTitle={i.playListTitle}
              channelTitle={i.channelTitle}
              item={i}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default FavoriteComponent;
