import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useStoreActions } from "easy-peasy";

const ModalPlaylist = ({ handleClose, open }) => {
  const [state, setState] = useState("");

  const playlist = useStoreActions((actions) => actions.playlists);

  // get id from plylist url
  function getPlaylistIdFromUrl(url) {
    const regex = /list=([a-zA-Z0-9_-]{34})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  console.log(state);
  const handelKeyDown = (e) => {
    if (e.key === "Enter") {
      handelSubmit(e);
    }
  };

  // Recent action

  const { recent } = useStoreActions((state) => state.recentPlaylist);

  const handelSubmit = (event) => {
    event.preventDefault();

    if (!state) {
      alert("please provied playlist url or id");
    } else {
      const playlistId = getPlaylistIdFromUrl(state);
      if (playlistId) {
        playlist.getPlaylist(playlistId);
        recent(playlistId);
      } else {
        playlist.getPlaylist(state);
        recent(state);
      }

      setState("");

      handleClose();
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add your Tutorial</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is an modal you insert the playlist Id and take a look on web
            page
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="ADD playlist id"
            type="text"
            name="state"
            fullWidth
            variant="standard"
            onKeyDown={handelKeyDown}
            onChange={(event) => setState(event.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handelSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ModalPlaylist;
