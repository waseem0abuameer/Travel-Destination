import React, { Component, useState } from 'react';
import Header from '../header/Header';
import FOO from "..//footer/Footer"
import { useParams } from 'react-router-dom';
export default function TourDetails({ data }) {
    let { id } = useParams();
    let city = data.filter(city => city.id == id);
    const [seeMore, setseeMore] = useState(false);
    let seemoreh = () => {
        setseeMore(!seeMore);
    }
    return (
        <>
            <Header />
            <div className="Container">
                <h2>Name: {city[0].name} &nbsp; Price: {city[0].price}</h2>


                <img className="img" alt="" src={city[0].image}></img>

                <p>Description: {seeMore ? city[0].info : city[0].info.slice(0, 200)}</p>
                <button onClick={seemoreh}>{seeMore ? "see less" : "see More"}</button>
            </div>
            <FOO />
        </>
    );
}