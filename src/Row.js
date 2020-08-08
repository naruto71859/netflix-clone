import React, {useEffect, useState} from 'react';
import  movies_db  from "./axios";
import './css/row.css'
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
const image_base_url = 'https://image.tmdb.org/t/p/original';



function Row({ title='nottitle yet', movieType , isLargeRow=false}) {

    const [movies, setmovies]= useState([])
    const [trailerUrl, settrailerUrl]= useState("")



    useEffect(
        () =>{
              async function fetchdata(){

                const request = await movies_db.get(movieType)
                setmovies(request.data.results)
                  return request;
              }
              fetchdata();
        }, [movieType]
    )

    const opts ={
        height:"390",
        width:"100%",
        playerVars:{
           autoplay:true


        }
    }

    const showTrailer = async (movie) => {

        
        try {
            const url = await movieTrailer(movie?.title);
            const urlID = new URLSearchParams(new URL(url).search);

            if (trailerUrl){
                urlID.get('v') === trailerUrl?  settrailerUrl(''):  settrailerUrl(urlID.get('v'));
            }else{
                settrailerUrl(urlID.get('v'))
            }
        }
        catch (e) {
            console.log(e.error)
        }
        

    }
    return (

        <div className="row_container">
                <h2>{title}</h2>
            <div className="row_posters">
                {

                    movies.map((movie,i) => (
                        <img
                            key={i} className={`row_poster_img  ${isLargeRow && "row_poster_largeImg" }`}
                            src={ isLargeRow ? image_base_url + movie.poster_path: image_base_url + movie.backdrop_path }
                            alt={movie.title}
                            onClick={() => showTrailer(movie)}
                        />

                    ))
                }
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}

export default Row;