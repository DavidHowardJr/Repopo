import React from 'react';

const Forecast = () => {
    function getForecast() {
        const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4cdd02d352mshed0d6704df0b2e3p1847acjsnf8f05c978289',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
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
    } 

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