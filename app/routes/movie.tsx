import type { Route } from './+types/movie';
import { getMovieById } from '../data';

export function meta({ data: movie }: Route.MetaArgs) {
  if (!movie) {
    return [
      { title: 'Movie not found' },
      { name: 'description', content: 'Movie not found' },
    ];
  }

  return [
    { title: movie.title },
    { name: 'description', content: movie.description },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  return getMovieById(params.id);
}

export default function Movie({ loaderData: movie }: Route.ComponentProps) {
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className='flex gap-10 items-center mt-8'>
      <img
        className='movie-image h-96 object-cover rounded-lg'
        src={movie.image}
        alt={movie.title}
      />
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl font-bold'>{movie.title}</h1>
        <p className='text-gray-500'>{movie.description}</p>
        <div className='flex gap-4 mt-2'>
          <button className='bg-red-500 w-32 text-sm text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600 transition-all duration-300'>
            Play
          </button>
          <button className='bg-white w-32 text-sm text-red-500 border border-red-500 px-4 py-2 rounded-md cursor-pointer hover:bg-red-50 transition-all duration-300'>
            Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
