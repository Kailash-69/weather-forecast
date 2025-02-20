const form = document.getElementById('weather-form');
const weatherReport = document.getElementById('weather-report');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const location = document.getElementById('location').value;

  // Replace with your API key
  const apiKey = 'c73e82ba7d9cf796c122baf7421d2b4c';

  // Replace with your API endpoint
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${c73e82ba7d9cf796c122baf7421d2b4c}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      weatherReport.innerHTML = `<h2>${location}</h2><p>Temperature: ${temperature}</p><p>Description: ${description}</p>`;
    });
});
