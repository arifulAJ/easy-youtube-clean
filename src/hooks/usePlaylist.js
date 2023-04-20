// import { useEffect, useState } from "react";
// import getPlaylist from "../api";
// import storage from "../utils/Storage";
// import store from "../store";

// const STORAGE_KEY = "cy_playlist_states";
// const INITIAL_STATE = {
//   playlists: {},
//   favorites: [],
//   recentPlaylists: [],
// };
// const usePlaylists = () => {
//   const [state, setState] = useState(INITIAL_STATE);

//   useEffect(() => {
//     const state = storage.get(STORAGE_KEY);
//     if (state) {
//       setState({ ...state });
//     }
//   }, []);
//   useEffect(() => {
//     if (state !== INITIAL_STATE) {
//       storage.save(STORAGE_KEY, state);
//     }
//   }, [state]);
//   const getPlaylistById = async (playlistId) => {
//     try {
//       const playlist = await getPlaylist(playlistId);
//       setState((prev) => ({
//         ...prev,
//         playlists: {
//           ...prev.playlists,
//           [playlistId]: playlist,
//         },
//       }));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
//   const addFavorite = (playlistId) => {
//     setState((prev) => ({
//       ...prev,
//       favorites: [prev, playlistId],
//     }));
//   };
//   const addRecent = (playlistId) => {
//     setState((prev) => ({
//       ...prev,
//       recentPlaylists: [prev, playlistId],
//     }));
//   };
//   const getPlaylistByIds = (ids = []) => {
//     return ids.map((id) => state.playlists[id]);
//   };
//   return {
//     playlists: state.playlists,
//     favorites: getPlaylistByIds[state.favorites],
//     recentPlaylists: getPlaylistByIds[state.recentPlaylists],
//     getPlaylistById,
//     addFavorite,
//     addRecent,
//   };
// };
// export default usePlaylists;
