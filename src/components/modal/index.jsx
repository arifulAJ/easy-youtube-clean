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
  const [playlistInput, setPlaylistInput] = useState("");
  const playlist = useStoreActions((actions) => actions.playlists);
  console.log(state);
  const handelSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements;
    console.log(input);
    if (!state) {
      alert("this is not valid");
    } else {
      playlist.getPlaylist(state);

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
