import React, {  useEffect, useRef, useState } from 'react';
import left_arrow from '../assets/left.svg'
import right_arrow from '../assets/right.svg'
import '../App.css'
import { Movie } from '../Types/Types';
import { Link } from 'react-router-dom';
import info_icon from '../assets/info_icon.png'
import play_icon from '../assets/play_icon.png'

const TitleCard:React.FC = () => {

    const [apiData,setApiData] = useState<Movie[]>([]);
    const scrollRef = useRef<HTMLDivElement|null>(null)

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjJiYTQxNTQ0OWU2N2JmNzFiMDlkOWY4MjRmOGNmNCIsIm5iZiI6MTcyNzE1MDQ0Ny4xNTIzMTQsInN1YiI6IjY2ZjIzNmI5MDIyMDhjNjdjODhkNWY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcmvANicD983A_YrUt9YRILuxRj4mx_jo6suA8UsWMs'
        }
      };
      
      useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));
      },[])

    const handleScroll = (direction: 'left'|'right') => {
        if(scrollRef.current){
            const scrollAmount = 700;
        scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
        })
    }}

  return (
    <div className="hidden xl:block mt-24 py-4 relative group">
      <h1 className="text-2xl font-bold mb-5 text-white">Popular On Netflix</h1>
      <div ref={scrollRef} className="scroll flex space-x-4 overflow-x-scroll pb-6 ">
        {apiData?.map((card, index) => (
          <Link to={`/player/${card.id}`} key={index} className="relative group/card flex-none w-44 sm:w-56 md:w-64 hover:z-[1] hover:scale-125 shadow-white shadow-m ease-in-out transform transition duration-300">
          <div className='hidden group-hover/card:flex top-20 left-6 absolute btn gap-5 text-black'>
              <button
               className='flex rounded border-0 outline-none py-2 px-4 items-center gap-2 text-sm
               font-bold bg-white hover:bg-[#ffffffbf]'
              ><img className='w-6' src={play_icon} alt="" />Play</button>
              <button
               className='flex rounded border-0 outline-none py-2 px-4 items-center gap-2 text-sm 
               font-bold text-white bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]'  
              ><img className='w-6' src={info_icon} alt="" />Info</button>
          </div>
          <img 
            src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} 
            alt={`Card ${index + 1}`} 
            className="rounded-md object-cover w-full h-auto shadow-md"
          />
          <p className='absolute hidden group-hover/card:flex top-6 left-7 flex-col text-white text-sm font-semibold'>{card.original_title}</p>
        </Link>
        ))}
      </div>
      <button
       onClick={() => handleScroll('left')}
       className='hidden group-hover:block absolute left-0 top-32 h-10 w-10 z-[1] bg-black'>
        <img src={left_arrow} alt="" />
      </button>
      <button
       onClick={() => handleScroll('right')}
       className=' hidden group-hover:block absolute right-0 top-32 h-10 w-10 z-[1] bg-black'>
        <img src={right_arrow} alt="" />
      </button>
    </div>
  );
};

export default TitleCard;