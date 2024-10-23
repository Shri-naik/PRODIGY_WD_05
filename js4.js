const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
// const apiKey = 'YOUR_API_KEY';
const locationInput = document.getElementById('location');
const getWeatherButton = document.getElementById('get-weather');
const weatherDataDiv = document.getElementById('weather-data');

getWeatherButton.addEventListener('click', getWeather);

function getWeather() {
    const location = locationInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found!!');
            }
            return response.json();
        })
        .then(data => {
            const weatherData = `
                <h2 style="font-size: 2em;">Current Weather in ${data.name}</h2>
                <p style="font-size: 1.5em;">Temperature: ${data.main.temp}°C</p>
                <p style="font-size: 1.5em;">Weather Conditions: ${data.weather[0].description}</p>
                <p style="font-size: 1.5em;">Humidity: ${data.main.humidity}%</p>
                <p style="font-size: 1.5em;">Wind Speed: ${data.wind.speed} m/s</p>
            `;
            weatherDataDiv.innerHTML = weatherData;
        })
        .catch(error => {
            weatherDataDiv.innerHTML = `<p style="color:blue;">${error.message}</p>`;
            console.error('Error:', error);
        });
}
