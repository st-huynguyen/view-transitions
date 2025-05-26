export interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  rating: number;
  year: number;
  duration: string;
}

export async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return movies;
}

export async function getMovieById(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return movies.find((movie) => movie.id === id);
}

const movies: Movie[] = [
  {
    id: 'avengers-age-of-ultron',
    title: 'Avengers: Age of Ultron',
    image: '/assets/avengers-age-of-ultron.webp',
    description:
      'The Avengers must stop the villainous Ultron from using the Mind Stone to assemble a new team of Avengers with megalomaniacal intent.',
    rating: 7.3,
    year: 2015,
    duration: '141 min',
  },
  {
    id: 'avengers-infinity-war',
    title: 'Avengers: Infinity War',
    image: '/assets/avengers-infinity-war.webp',
    description:
      'Thanos seeks all six Infinity Stones to fulfill his twisted vision of balance by eliminating half of life across the entire universe.',
    rating: 8.4,
    year: 2018,
    duration: '149 min',
  },
  {
    id: 'avengers-endgame',
    title: 'Avengers: Endgame',
    image: '/assets/avengers-endgame.webp',
    description:
      'The remaining Avengers travel through time to retrieve the Infinity Stones and restore those lost in Thanos’s devastating snap five years earlier.',
    rating: 8.4,
    year: 2019,
    duration: '181 min',
  },
  {
    id: 'deadpool-and-wolverine',
    title: 'Deadpool and Wolverine',
    image: '/assets/deadpool-and-wolverine.webp',
    description:
      'Deadpool recruits a weary Wolverine for a timeline-hopping adventure that threatens reality and forces them to face a powerful new enemy together.',
    rating: 7.3,
    year: 2024,
    duration: '124 min',
  },
];
