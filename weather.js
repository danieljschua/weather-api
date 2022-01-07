// state code: 45
const apiKey = '801a40d1756ef030831e0c63b8483ad4';

const loadWeather = async (city) => {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`
    );
    data = await data.json();
    displayWeather(data);
  } catch (error) {
    alert(
      'Please check the spelling of the desired city; it was not found within the API. The city may also not be tracked by the API.'
    );
  }
};

const displayWeather = (data) => {
  let x = document.querySelector('.heading');
  let y = data.sys.country;
  x.textContent = `Weather for ${data.name}, ${y}`;

  x = document.querySelector('.description');
  x.textContent = `Description: ${data.weather[0].description}`;

  x = document.querySelector('.temperature');
  x.textContent = `Temperature: ${data.main.temp}`;

  x = document.querySelector('.feels-like');
  x.textContent = `Feels Like: ${data.main.feels_like}`;

  x = document.querySelector('.min');
  x.textContent = `Min: ${data.main.temp_min}`;

  x = document.querySelector('.max');
  x.textContent = `Max: ${data.main.temp_max}`;

  x = document.querySelector('.pressure');
  x.textContent = `Pressure: ${data.main.pressure}`;

  x = document.querySelector('.humidity');
  x.textContent = `Humidity: ${data.main.humidity}`;

  x = document.querySelector('.visibility');
  x.textContent = `Visibility: ${data.visibility}`;
};

loadWeather('Fairfax');
