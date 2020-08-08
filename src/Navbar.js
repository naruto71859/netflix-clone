import React, {useEffect, useState} from 'react';
import './css/navbar.css'
function Navbar() {

    const [show , handelshow] =  useState( false )
    // scroll listner
    useEffect(
        () => {
            window.addEventListener('scroll' , ()=>{
                window.scrollY > 100 ? handelshow(true) : handelshow(false)
            });
            return () => {
                window.removeEventListener('scroll')
            }
        },[]);

    return (
        <div className={`nav ${show && 'nav_black'}`}>

            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/640px-Logo_Netflix.png" alt=""/>
            <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/640px-Logo_Netflix.png" alt=""/>

        </div>

    );
}

export default Navbar;