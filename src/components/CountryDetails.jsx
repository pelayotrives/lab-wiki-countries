import React from 'react'
import { useParams } from "react-router-dom";
import countries from "../countries.json"

function CountryDetails() {

    //! ----------- Estado -----------

    const { id } = useParams();
    console.log(id)

    const countryFiltered = countries.filter( (eachCountry) => {
        return ( eachCountry.alpha3Code === id )
    })

    console.log(countryFiltered);

    // const foundBorder = countryFiltered.borders.map((eachBorder) => {
    //     return eachBorder
    // });

    // console.log(foundBorder)

    const styles1 = {
        marginBottom: "40px",
      }

  return (

    <div>
        <img style={styles1} width={400} src={`https://flagpedia.net/data/flags/w1160/${countryFiltered[0].alpha2Code.toLowerCase()}.webp`} alt="flag" />
        <br/>
        <h1>{countryFiltered[0].name.common}</h1>
        <p>Capital: {countryFiltered[0].capital}</p>
        <p>Area: {countryFiltered[0].area}</p>
        <p>Borders:</p>
        {countryFiltered[0].borders.map( (eachBorder) => {
            return eachBorder
        })}
        <p></p>
        
    </div>

  )
}

export default CountryDetails