function sortYear(movies) {
  const comp = (a, b) => a.year - b.year;
  movies.sort(comp);
  return movies;
}

function sortTitle(movies) {
  const normalizeTitle = (str) => {
    const m = str.match(/^the (.+)$/i);
    if(m) {
      return m[1].toLowerCase();
    }
    else {
      return str.toLowerCase();
    }
  };
  const comp = (a, b) => {
    const aT = normalizeTitle(a.title);
    const bT = normalizeTitle(b.title);
    return aT>bT ? 1: -1;
  };
  movies.sort(comp);
  return movies;
}

function inGenre(movies, genre) {
  return movies.filter((movies)=>movies.genres.includes(genre));
}

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};