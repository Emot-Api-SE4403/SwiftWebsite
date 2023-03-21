import './App.css';
import NavigationBar from '../components/NavigationBar';
import {CgProfile} from 'react-icons/cg';
import MatPel from '../components/MatPel';
import Intro from '../components/Intro';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() {
    
    const asli = (<div>
      <div className = "awal">
        <NavigationBar />
        <Intro/>
      </div>
      <div className = "boy">
        <MatPel/>
      </div>
      <div className = "extend">
      </div>
      <div className = "bottomintro">
        <h1 style={{color: 'white'}}>Tentang Kami</h1>
      </div>

     
      
    </div>);
    return(
        asli
    )
}