const API_KEY ="3fb92c93807575fc26ca7edc135f8531";


const requists = {
   fetchTrend:`/trending/all/week?api_key=${ API_KEY }&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${ API_KEY }&with_networks=213`,
   fetchTopratedMovies: `/movie/top_rated?api_key=${ API_KEY }&language=en-US`,
   fetchActionMovies:  `/discover/movie?api_key=${ API_KEY }&with_genres=28`,
   fetchComadyMovies: `/discover/movie?api_key=${ API_KEY }&with_genres=35`,
   fetchHorrorMovies: `/trending/all/week?api_key=${ API_KEY }&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${ API_KEY }&with_genres=10749`,
   fetchDocumentaries:   `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requists;
