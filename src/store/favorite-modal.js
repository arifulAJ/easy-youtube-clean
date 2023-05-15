import { action, persist } from "easy-peasy";

const favoritesModal = persist({
  items: [],

  addToFavorite: action((state, playlistId) => {
    state.items.push(playlistId);
  }),
  removeToFavorite: action((state, playlistId) => {
    state.items = state.items.filter((item) => {
      if (item.playlistId !== playlistId) {
        return true; // Keep the item in the array
      } else {
        return false; // Remove the item from the array
      }
    });
  }),
});
export default favoritesModal;
