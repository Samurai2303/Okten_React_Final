import {axiosInstance} from "./axios.service";

let moviesService = {
    getById: (id) => axiosInstance(`/movie/${id}`),
    getKeywordsMovies: (keyword) => axiosInstance(`/search/keyword?query=${keyword}`),
    getMovies: (page, sort, genres, adult) => axiosInstance(`/discover/movie?page=${page}&sort_by=${sort}&with_genres=${genres}&include_adult=${adult}`),
};

export {moviesService};