import "../tours/Tours.css"
import Tour from "./tour/Tour"
import React, { Component } from 'react';
const Tours = ({ data }) => {
    return (
        <>
            {
                data.map((tour, index) => {

                    return (

                        <Tour key={index} tour={tour} />
                    )

                })
            }
        </>


    )
};

export default Tours;