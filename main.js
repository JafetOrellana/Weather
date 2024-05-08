  class centro {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
      this.temperature = null;
      this.temperatureDescription = null;
      this.windSpeed = null;
      this.pressure = null;
      this.feelsLike = null;
      this.fetchData();
    }
  
    async fetchData() {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=e89d8d3d900ad5740b9577386f97d31a&units=metric`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        this.temperature = `${Math.round(data.main.temp)}°`;
        this.temperatureDescription = data.weather[0].description;
        this.windSpeed = `${data.wind.speed} m/s`;
        this.feelsLike = `${Math.round(data.main.feels_like)}°`;
        this.pressure = `${data.main.pressure} mb`;

      } catch (error) {
        console.error( error);
      }
    }
  
    get getTemperature() {
      return this.temperature;
    }
  }
  
  async function main() {
    const unahCu = new centro("UNAH-CU", "14.084538933654455", "-87.16708894884279");
    const unahCurc = new centro("UNAH-CURC", "14.430212311249582", "-87.63352877297008");
    const unahCurla = new centro("UNAH-CURLA","15.739013524664774","-86.84958061544728");
    const unahCurlp = new centro("UNAH-CURLP", "13.334113009899987" , "-87.1379086638365");
    const unahCurno = new centro("UNAH-CURNO", "14.7053403411947", "-86.17740231527047");
    const unahCuroc = new centro("UNAH-CUROC", "14.794436793206298", "-88.77173601163906");
    const unahTecDanli = new centro("UNAH-TEC Danlí", "13.99336832671218", "-86.57028033349991");
    const unahTecAguan = new centro("UNAH-TEC Aguán", "15.494681447231422", "-86.5802869962947");
    const unahVs = new centro("UNAH-VS", "15.5299", "-88.0357");
    
    await unahVs.fetchData(); // Esperar hasta que se obtenga la temperatura
    await unahCurla.fetchData();
    await unahCu.fetchData();
    await unahCurc.fetchData();
    await unahCurlp.fetchData();
    await unahCurno.fetchData();
    await unahCuroc.fetchData();
    await unahTecDanli.fetchData();
    await unahTecAguan.fetchData();

    let centers = [unahCu, unahCurc, unahCurla, unahCurlp, unahCurno , unahCuroc, unahTecAguan, unahTecDanli, unahVs];
    let data = ["name","temperature"/*, "temperatureDescription"*/, "feelsLike", "pressure", "windSpeed"];




    centers.forEach(center => {
      data.forEach(idSelector => {
        var element = document.querySelector(`#${center.name} #${idSelector}`);
        element.textContent += center[idSelector]; 
      });

      let animatedIcon = document.getElementById("animatedIcon")
      let description = document.querySelector(`#${center.name} #temperatureDescription`);
      switch (center.temperatureDescription) {
        case 'Thunderstorm':
          animatedIcon.src='svg icons/animated/thunder.svg'
          description.textContent = ('TORMENTA');
          break;
        case 'Drizzle':
          animatedIcon.src='svg icons/animated/rainy-2.svg'
          description.textContent = ('LLOVIZNA');
          break;
        case 'Rain':
          animatedIcon.src='svg icons/animated/rainy-7.svg'
          description.textContent = ('LLUVIA');
          break;
        case 'Snow':
          animatedIcon.src='svg icons/animated/snowy-6.svg'
            description.textContent = ('NIEVE');
          break;                        
        case 'Clear':
            animatedIcon.src='svg icons/animated/day.svg'
            description.textContent = ('LIMPIO');
          break;
        case 'Atmosphere':
          animatedIcon.src='svg icons/animated/weather.svg'
            description.textContent = ('ATMOSFERA');
            break;  
        case 'Clouds':
            animatedIcon.src='svg icons/animated/cloudy-day-1.svg'
            description.textContent = ('NUBES');
            break;  
            case 'few clouds':
              animatedIcon.src='svg icons/animated/cloudy.svg'
              description.textContent = ('ALGUNAS NUBES');
              break;
        default:
          animatedIcon.src='svg icons/animated/cloudy-day-1.svg'
          description.textContent = ('por defecto');
      }
    });
    

  }
  


  main();
  
