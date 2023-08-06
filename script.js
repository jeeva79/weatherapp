const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "4cd0eee81294c867b4bc4cfc64e998c5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://github.com/jeeva79/weatherapp/assets/125794481/93809bd5-ccbb-46a8-9fad-788290254492";
            break;
        case 'Clear':
            weather_img.src = "https://github.com/jeeva79/weatherapp/assets/125794481/ace1bdae-3ddd-405b-b559-4d2558e29d91";
            break;
        case 'Rain':
            weather_img.src = "https://github.com/jeeva79/weatherapp/assets/125794481/26c4a3a5-186d-4012-955a-4cb86928e45e";
            break;
        case 'Mist':
            weather_img.src = "https://github.com/jeeva79/weatherapp/assets/125794481/868a25e3-716d-4c61-ae31-d9cd15356f97";
            break;
        case 'Snow':
            weather_img.src = "https://github.com/jeeva79/weatherapp/assets/125794481/dce7c911-9a57-43d7-84cf-c6d4c6b60b0f";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
