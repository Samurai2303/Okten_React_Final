import {axiosInstance} from "./axios.service";

let moviesService = {
    getById: (id) => axiosInstance(`/movie/${id}`),
    searchMovies: (movieName, page, adult) => axiosInstance(`/search/movie?query=${movieName}&page=${page}&include_adult=${adult}`),
    getMovies: (page, sort, genres, adult) => axiosInstance(`/discover/movie?page=${page}&sort_by=${sort}&with_genres=${genres}&include_adult=${adult}`)
};

export {moviesService};