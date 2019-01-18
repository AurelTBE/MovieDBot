const axios = require('axios');
const config = require('../config');

function discoverMovie(kind, genreId, language) {
  return moviedbApiCall(kind, genreId, language).then(response =>
    apiResultToCarousselle(response.data.results)
  );
}

function moviedbApiCall(kind, genreId, language) {
  return axios.get(`https://api.themoviedb.org/3/discover/${kind}`, {
    params: {
      api_key: config.MOVIEDB_TOKEN,
      sort_by: 'popularity.desc',
      include_adult: false,
      with_genres: genreId,
      with_original_language: language,
      language: 'fr-FR',
    },
  });
}

function apiResultToCarousselle(results) {
  if (results.length === 0) {
    return [
      {
        type: 'quickReplies',
        content: {
          title: "Désolé, je n'ai trouvé aucun résultat pour ta recherche :(",
          buttons: [{ title: 'Recommencer', value: 'Recommencer' }],
        },
      },
    ];
  }

  const cards = results.slice(0, 10).map(e => ({
    title: e.title || e.name,
    subtitle: e.overview,
    imageUrl: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`,
    buttons: [
      {
        type: 'web_url',
        value: `https://www.themoviedb.org/movie/${e.id}`,
        title: 'Voir plus',
      },
    ],
  }));

  return [
    {
      type: 'text',
      content: "Regarde ce que j'ai trouvé pour toi ! :)",
    },
    { type: 'carousel', content: cards },
  ]
  ;
}

module.exports = {
  discoverMovie,
};