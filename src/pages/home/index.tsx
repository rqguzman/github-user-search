import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/button';
import './styles.scss';


const Home = () => (

    <div className="home-container">

        <h1 className="home-title">
            DevSuperior Bootcamp  <br />
            Chapter #3 | Challenge
        </h1>
        <p className="home-text">
            Wellcome to chapter's 3 challenge of DevSuperior Bootcamp. <br/><br/>
        
            Please observe the instructions given in the chapter on the preparation of this project. <br/><br/>
        
            This design was adapted from Ant Design System for Figma, by Mateusz Wierzbicki:
            <a href="antforfigma@gmail.com"> antforfigma@gmail.com</a>
        </p>
        <Link to="/search">
            <Button text="Start"/>
        </Link>

    </div>

);

export default Home;