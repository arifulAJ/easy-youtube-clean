import { useStoreActions } from "easy-peasy";
import store from "../store";

const useStoreById = () => {
  const allData = store.getState();

  const playlist = useStoreActions((actions) => actions.playlists);

  return { playlist };
};
export default useStoreById;
