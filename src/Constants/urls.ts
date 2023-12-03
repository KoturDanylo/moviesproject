const baseURL = process.env.REACT_APP_API;

const urls = {
    movie: '/discover/movie',
    genres: '/genre/movie/list',
    details: '/movie',
    search: '/search/movie',
};

const defaultPoster = `https://image.tmdb.org/t/p/original`;
const ImageNotFound =
    'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
const notFoundPageImage = 'https://miro.medium.com/max/1400/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg';
const imdbImage =
    'https://m.media-amazon.com/images/G/01/IMDb/BG_square._CB1509067564_SY230_SX307_AL_.png';

export { baseURL, urls, defaultPoster, ImageNotFound, notFoundPageImage, imdbImage };
