import React, { useState,useEffect } from 'react'
import back_arrow from '../assets/back_arrow_icon.png'
import { MovieVideo } from '../Types/Types'
import { useNavigate, useParams } from 'react-router-dom'

const Player:React.FC = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [data,setData] = useState<MovieVideo>({
    name:"",
    key:"",
    published_at:"",
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjJiYTQxNTQ0OWU2N2JmNzFiMDlkOWY4MjRmOGNmNCIsIm5iZiI6MTcyNzE1MDQ0Ny4xNTIzMTQsInN1YiI6IjY2ZjIzNmI5MDIyMDhjNjdjODhkNWY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcmvANicD983A_YrUt9YRILuxRj4mx_jo6suA8UsWMs'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setData(response.results[0]))
    .catch(err => console.error(err));
  })

  return (
    <div className='relative player h-[100vh] flex flex-col justify-center items-center'>
        <img
         className='absolute top-5 left-5 w-[50px] cursor-pointer' 
         src={back_arrow} alt="" onClick={() => navigate(-2)} />
        <iframe 
          className='rounded'
          src={`https://www.youtube.com/embed/${data.key}`} width="90%" height="90%"
          title='trailer' frameBorder="0" allowFullScreen
        > </iframe>
        <div
         className='info flex items-center justify-between w-[90%]'
        >
            <p>Published Date:{data.published_at}</p>
            <p>Name:{data.name}</p>
        </div>
    </div>
  )
}

export default Player