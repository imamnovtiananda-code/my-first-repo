// Function untuk Tugas Utama (Fetch Weather by City)
function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Ganti dengan API Key Anda
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);


// Function untuk Practice Task (Fetch Weather by Latitude & Longitude)
function showweatherByCoordinates(event) {
    event.preventDefault();

    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apiKey = 'YOUR_API_KEY'; // Ganti dengan API Key Anda
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Coordinates not found');
            }
            return response.json();
        })
        .then(data => {
            const latLonWeatherInfo = document.getElementById('latLonWeatherInfo');
            latLonWeatherInfo.innerHTML = `
                <h2>Weather in ${data.name || 'Selected Location'}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather by coordinates:', error);
            const latLonWeatherInfo = document.getElementById('latLonWeatherInfo');
            latLonWeatherInfo.innerHTML = `<p>Failed to fetch weather for given coordinates. Please try again.</p>`;
        });
}

document.getElementById('latLonForm').addEventListener('submit', showweatherByCoordinates);