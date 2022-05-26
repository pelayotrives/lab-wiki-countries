import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countryList from "./countries.json"
import axios from "axios";



// Importamos tres contenidos BÁSICOS de React Router Dom que usaremos para routear nuestros archivos.
import { Route, Routes, Link } from "react-router-dom";

function App() {

  //! ----------- Estado -----------
  const [selectCountry, setSelectCountry] = useState(null);

  useEffect( () => {
    getCountries()
  }, [])

  const getCountries = async () => {
    setSelectCountry(null)
    try {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
      console.log("Prueba -->", response.data)
      setSelectCountry(response.data)
    }
    catch (error) {
      console.log(error)
    }
    
  }

  if (selectCountry === null) {
    <br /> 
    return <h3>...Cargando información...</h3>
  }


  return (
    <div className="App">
      <br />
      <NavBar />
      <br />
        <div id='my-web'>

        <CountriesList countryList={countryList}/>

        <Routes>
          <Route path={ "/:id" } element={ <CountryDetails /> }/>
        </Routes>

        </div>
    </div>
  );
}

export default App;
