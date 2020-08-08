import React, {useEffect, useState} from 'react';
import movies_db from "./axios";
import './css/banner.css'
const image_base_url = 'https://image.tmdb.org/t/p/original';

function Banner({movieType}) {
    const [movie, setMovie] = useState([]);

    useEffect(
        ()=>{
            async function fetchMovie(){
                const request = await movies_db.get(movieType)
                let number = Math.floor( Math.random() * (request.data.results.length -1) );
                setMovie(request.data.results[number])

            }
            fetchMovie();
        },[movieType]
    )


    const trancText = (text,nbWords ) => {
        // var text = 'hello world my name is salah besbes im 28 years old im a engeneere '
        var strippedString = text?.trim();
        var array = strippedString?.split(" ");
        var textlenth = array?.length;
        var newsyntense = array?.splice(0, nbWords).join(" ");

        if(textlenth > nbWords) {
            newsyntense += "...";
        }
        return newsyntense
    }

    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:` url( ${image_base_url + movie?.backdrop_path })`,
                backgroundPosition:"center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{ movie?.title || movie?.original_title }</h1>
                <div className="banner_buttons">
                    <button className="button_banner">Play</button>
                    <button className="button_banner">My List</button>
                </div>
                <div className="banner_description">
                    {  trancText (movie?.overview , 25) }
                </div>
            </div>
            <div className="banner_fadeButton"/>
        </header>
    );
}

export default Banner;