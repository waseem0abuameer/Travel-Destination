import React from 'react';
import Header from '../header/Header';
import FOO from "..//footer/Footer"
import Tour from "..//tours/Tours"
import data from "../data/data.json"
export default function Home() {
    return (
        <>

      <Header/>
      <Tour tours={data}/>
      <FOO/>
      
      </>
    )
  }