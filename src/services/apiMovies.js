import { options } from "../utils/apiCredentials";

export const getPopularMovies = async (page) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("There was an error while getting popular Movies");
  }
};

export const getTopRatedMovies = async (page) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      options
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("There was an error while getting top rated Movies");
  }
};

export const getUpcomingMovies = async (page) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
      options
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("There was an error while getting upcoming Movies");
  }
};

export const getNowPlayingMovies = async (page) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
      options
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("There was an error while getting now playing Movies");
  }
};

export const getMovieById = async (id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(
      `There was an error while getting movie with this id: (${id})`
    );
  }
};

export const getMovieCast = async (id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("There was an error while getting Movie Cast");
  }
};
