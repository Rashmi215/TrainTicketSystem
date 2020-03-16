import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import Footer from './Footer/Footer';
import NavBar from './Navbar/Navbar';
import './index.css'

export default function HomePage(props){
    return(
        <div className='home'>
           <NavBar />
           <SearchForm {...props}/>
           <Footer />
        </div>
    )
}