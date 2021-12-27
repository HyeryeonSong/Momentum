const API_KEY = `9291170a958a5a9b35b5d06b6a407c0b`;

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weater span:first-child");
      const city = document.querySelector("#weater span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weater[0].main;      
  });
};

function onGeoError(){
  alert("Can't find you. No weather for you.");
};

