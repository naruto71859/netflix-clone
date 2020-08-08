
    const APIKEY = "a5b7fe327d2daf6dc36d8d5f589a3779"
// https://api.themoviedb.org/3/movie/550?api_key=a5b7fe327d2daf6dc36d8d5f589a3779

// rsf

 const request = {
    listallthegenres : `/genre/movie/list?api_key=$${APIKEY}&language=en-US`,
    actionmovies : `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    dramamovies : `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`,
    horrormovies : `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
    comedymovies : `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    trendingmovies : `/trending/movie/week?api_key=${APIKEY}`,
    netflixmovies : `https://api.themoviedb.org/3/discover/movie?with_networks=213&api_key=${APIKEY}`,

}

    export default request;
