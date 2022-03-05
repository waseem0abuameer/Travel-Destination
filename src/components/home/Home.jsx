import React, { Component } from 'react';
import Header from '../header/Header';
import FOO from "..//footer/Footer"
import Tour from "..//tours/Tours"

export default function Home({ data }) {
  return (
    <>

      <Header />
      <Tour data={data} />

      <FOO />

    </>
  )
}