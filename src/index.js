import "./style/style.css";
import React from "react";
import ReactDOM  from "react-dom";

const getTextJudul = document.querySelector("#judul");

getTextJudul.innerHTML = "JUDUL pertama d";


ReactDOM.render(
    <h1>Hello World</h1>,
  document.getElementById('root')
);