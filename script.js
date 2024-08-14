async function getWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6273960307mshab68c215b3695bcp16cba3jsn916337e20306',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const result = await response.json();
        displayWeather(result);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    // Assuming data contains relevant weather information
    weatherInfo.innerHTML = `
        <h2>Weather Data</h2>
        <p>Temperature: ${data.main.temp} °F</p>
        <p>Weather: ${data.weather[0].description}</p>
        <!-- Add more weather data as needed -->
    `;
}

document.getElementById('search-btn').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value;
    await getWeather(city);
});