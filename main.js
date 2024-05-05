

window.addEventListener('load', ()=>{
  let lon;
  let lat;
  let city;

  let temperatureValue = document.getElementById('temperature-value');
  let temperatureDescription = document.getElementById('temperature-description');

  let ubication = document.getElementById('ubication');
  let animatedIcon = document.getElementById('animated-icon');

  let windVelocity = document.getElementById('wind-velocity');
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position =>{
    lon = position.coords.longitude;
    lat = position.coords.latitude;


    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e89d8d3d900ad5740b9577386f97d31a&units=metric`;
    
    console.log(url);    
    
    fetch(url)
    .then( response => { return response.json()})
    .then(data =>{
      let temp = Math.round(data.main.temp);
      console.log(temp);
    })
    .catch( error => {
      console.log(error)
  })

  })
  }
})