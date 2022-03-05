import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import data from './data/data.json';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="city/:id" element={<TourDetails data={data} />} />
      </Routes>


    </>

  );
}

export default App;