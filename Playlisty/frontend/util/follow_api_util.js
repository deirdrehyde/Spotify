export const fetchFollowedPlaylists = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/follows?follower=${userId}`
  });
};

export const createPlaylistFollow = playlistId => {
  return $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {follow: {playlist_id: playlistId}}
  });
};

export const deletePlaylistFollow = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows/${id}`
  });
};
