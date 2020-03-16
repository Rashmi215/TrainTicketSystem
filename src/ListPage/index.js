import React from 'react';
import NavBar from '../HomePage/Navbar/Navbar';
import TrainList from './TrainList/TrainList';
import './index.css';

export default function ListPage(props){
    return(
        <div className='list'>
            <NavBar />
            <TrainList {...props}/>
        </div>
    )
}