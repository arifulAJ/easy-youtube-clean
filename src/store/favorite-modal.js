import { action, persist } from "easy-peasy";

const favoritesModal = persist({
  items: [],
  addToFavorite: action((state, payload) => {
    state.items.push(payload);
  }),
  removeToFavorite: action((state, playlistId) => {
    state.items = state.items.filter((pid) => playlistId !== pid);
  }),
});
export default favoritesModal;
