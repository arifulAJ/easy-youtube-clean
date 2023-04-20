import { createStore, persist } from "easy-peasy";
import playlistModal from "./playlist-modal";

import favoritesModal from "./favorite-modal";
import recentModal from "./recentPlaylist";
const persistConfig = {
  storage: "localStorage",
};
const store = createStore(
  persist(
    {
      playlists: playlistModal,
      favorites: favoritesModal,
      recentPlaylist: recentModal,
    },
    persistConfig
  )
);

export default store;
