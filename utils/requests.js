const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // fetchTrending: {
  //   title: 'TRENDING',
  //   url: `/trending/all/week?api_key=${API_KEY}&language0en-US`,
  // },
  fetchCharts: {
    title: 'CHARTS',
  },
  fetchNew: {
    title: 'New Releases',
  },
  fetchUserFollowing: {
    title: 'Liked Tracks',
  },
  fetchHipHop: {
    title: 'HipHop',
  },
  fetchPop: {
    title: 'Pop',
  },
  fetchRock: {
    title: 'Rock',
  },
  fetchAlternative: {
    title: 'Alternative',
  },
  fetchElectronic: {
    title: 'Electronic',
  },
};
