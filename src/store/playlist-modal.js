import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistModal = persist({
  data: {},
  error: "",
  isLoading: false,

  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  getPlaylist: thunk(
    async ({ addPlaylist, setLoading, setError }, playlistId, { getState }) => {
      if (getState().data[playlistId]) {
        setError("");

        alert("you already added this playlist ");
        return;
      }
      try {
        setLoading(true);
        setError("");
        const playlist = await getPlaylist(playlistId);

        addPlaylist(playlist);
      } catch (e) {
        setError(e?.message || "something went wrong");
        alert(`${e.message}"please provide valid iD or playlist"`);
      } finally {
        setLoading(false);
      }
    }
  ),
});

export default playlistModal;
