import { useStoreActions } from "easy-peasy";
import store from "../store";

const STORAGE_KEY = "cy_playlist_state-easy";
const useStoreById = () => {
  const allData = store.getState();

  // console.log(allData, "all");
  // localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...allData }));
  // const local = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // console.log(local, "local history ");

  const playlist = useStoreActions((actions) => actions.playlists);
  console.log(playlist);

  // useEffect(() => {
  //   playlist.getPlaylist(playlistId);
  // }, []);
  return { playlist };
};
export default useStoreById;
