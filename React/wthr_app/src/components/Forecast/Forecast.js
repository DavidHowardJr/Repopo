import React, {useState} from 'react';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        const url = 'https://open-weather-map27.p.rapidapi.com/weather';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4cdd02d352mshed0d6704df0b2e3p1847acjsnf8f05c978289',
                'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }

        .then(response => (response.json())
        .then(response => {
        setResponseObj(response)

}
),);
;

return (
    <div>
        <h2>Find Current Weather Conditions</h2>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <button onClick={getForecast}>Get Forecast</button>
    </div>
)
}

export default {forecast};