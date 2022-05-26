import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function CountriesList({countryList}) {

  //! ----------- Estado -----------


  return(
    <div>

    {
        countryList.map((eachCountry, index) => {
            return(
                <div key={eachCountry.name.common + index}>
                    <p>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />
                        <br/>
                        <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
                        <br/><br/>
                    </p>
                </div>
            )
        })
    }

    </div>
  ) 
}

export default CountriesList;
