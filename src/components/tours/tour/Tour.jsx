import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default function Tour(tour) {

    return (
        <>
            <h3>{tour.tour.name}</h3>
            <Link to={`city/${tour.tour.id}`} >

                <img src={tour.tour.image} alt="" />
            </Link>

        </>
    );

}

