import { Component } from "react";
import React,{useState, useEffect} from "react";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";


function App({Component, pageProps}){
  return( 
  <Layout>
    <Component {... pageProps} />
  </Layout>

  )}

export default App
