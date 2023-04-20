import axios from "axios";
const api = "AIzaSyCeNZaGCnUZo4rjwNANJucwYtCQ8Pd_dPQ";

const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=${playlistId}&key=${api}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${api}`;

  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);
  const content = playlistItems.map((content) => {
    const { videoId } = content?.contentDetails;
    return {
      videoId,
    };
  });
  const {
    title: playlistTitle,
    channelId,
    channelTitle,
    thumbnails,
    description: playlistDescription,
  } = data?.items[0]?.snippet;

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item?.snippet;

    return {
      title,
      description,
      thumbnails: { medium },
    };
  });

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail: thumbnails.default,
    channelId,
    channelTitle,
    playlistItems,
    content,
  };
};

export default getPlaylist;
