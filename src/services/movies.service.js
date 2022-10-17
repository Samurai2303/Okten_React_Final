import {axiosInstance} from "./axios.service";

let moviesService = {
    getById: (id) => axiosInstance(`/movie/${id}`),
    getKeywordsMovies: (keyword) => axiosInstance(`/keyword/${keyword}`),
    getMovies: (page, sort, genres, adult) => axiosInstance(`/discover/movie`),

};

export {moviesService};