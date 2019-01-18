const movieGenres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 12, name: 'Aventure' },
    { id: 16, name: 'Animation' },
    { id: 16, name: 'Animated' },
    { id: 16, name: 'Dessin animé' },
    { id: 16, name: 'Dessin-animé' },
    { id: 16, name: 'Dessin anime' },
    { id: 35, name: 'Comedy' },
    { id: 35, name: 'Comique' },
    { id: 35, name: 'Comédie' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 99, name: 'Documentaire' },
    { id: 18, name: 'Drama' },
    { id: 18, name: 'Drame' },
    { id: 10751, name: 'Family' },
    { id: 10751, name: 'Familial' },
    { id: 14, name: 'Fantasy' },
    { id: 14, name: 'Fantastic' },
    { id: 14, name: 'Fantastique' },
    { id: 36, name: 'History' },
    { id: 36, name: 'Historique' },
    { id: 36, name: 'Histoire' },
    { id: 27, name: 'Horror' },
    { id: 27, name: 'Horreur' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 10749, name: 'Romantic' },
    { id: 10749, name: 'Romantique' },
    { id: 878, name: 'Science Fiction' },
    { id: 878, name: 'Sci-Fi' },
    { id: 878, name: 'Sci Fi' },
    { id: 878, name: 'SF' },
    { id: 10770, name: 'TV Movie' },
    { id: 10770, name: 'Téléfilm' },
    { id: 10770, name: 'Film télé' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 10752, name: 'Guerre' },
    { id: 37, name: 'Western' },
  ];
  
  function getGenreId(genre) {
    const row = movieGenres.find(function(elem) {
      return elem.name.toLowerCase() === genre.toLowerCase();
    });
  
    if (row) {
      return row.id;
    }
    return null;
  }
  
  module.exports = {
    movieGenres,
    getGenreId,
  };