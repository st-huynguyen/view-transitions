import type { Route } from './+types/home';
import { NavLink } from 'react-router';
import { PlayIcon } from 'lucide-react';
import { getMovies } from '../data';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Top Marvel Movies' },
    { name: 'description', content: 'Top Marvel Movies' },
  ];
}

export async function loader() {
  return getMovies();
}

export default function Home({ loaderData: movies }: Route.ComponentProps) {
  return (
    <div className='flex flex-col gap-8 mt-4'>
      <h1 className='text-2xl font-bold'>Top Marvel Movies</h1>
      <ul className='grid grid-cols-4 gap-6'>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink
              viewTransition
              to={`/movies/${movie.id}`}
              className='overflow-hidden flex flex-col gap-2 group relative'
            >
              <img
                className='card-image h-80 object-cover rounded-lg'
                src={movie.image}
                alt={movie.title}
              />
              <span className='font-semibold group-hover:text-red-500 transition-all duration-300'>
                {movie.title}
              </span>
              <div className='absolute inset-0 flex items-center justify-center'>
                <button className='cursor-pointer block bg-red-500 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <PlayIcon className='w-6 h-6 fill-white stroke-white' />
                </button>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
