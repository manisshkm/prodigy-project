document.addEventListener('DOMContentLoaded', () => {
  const apiKey = '9384f38ad5321494d0075eff2397b5da';
  const cities = ['Delhi', 'Bihar', 'Mumbai'];
  const cityElements = document.querySelectorAll('.card');

  cities.forEach((city, index) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        cityElements[index].querySelector('.weather-card-title').innerText = `${temp}°C`;
        const details = cityElements[index].querySelector('.list-unstyled');
        details.innerHTML = `
          <li>${weather}</li>
          <li>Humidity: ${humidity}%</li>
          <li>Wind: ${wind} km/h</li>
        `;
      })
      .catch(error => console.error('Error fetching weather data:', error));
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const apiKey = '9384f38ad5321494d0075eff2397b5da';
  const searchButton = document.getElementById('search-button');
  const cityInput = document.getElementById('city-input');
  const weatherInfo = document.getElementById('weather-info');

  searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    fetchWeatherData(city);
  });

  function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        displayWeatherData(data);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }

  function displayWeatherData(data) {
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    weatherInfo.innerHTML = `
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">${data.name}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title weather-card-title">${temp}°C</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>${weather}</li>
              <li>Humidity: ${humidity}%</li>
              <li>Wind: ${wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
});

