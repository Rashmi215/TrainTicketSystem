import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import Footer from './Footer/Footer';
import NavBar from './Navbar/Navbar';

export default function HomePage(){
    return(
        <>
           <NavBar />
           <SearchForm />
           <Footer />
        </>
    )
}