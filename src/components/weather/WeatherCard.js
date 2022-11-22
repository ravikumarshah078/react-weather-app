import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    const [weatherState, setWeatheState] = useState("");
    useEffect(() => {
        if (weathermood) {
          switch (weathermood) {
            case "Clouds":
              setWeatheState("wi-day-cloudy");
              break;
            case "Haze":
              setWeatheState("wi-fog");
              break;
            case "Clear":
              setWeatheState("wi-day-sunny");
              break;
            case "Mist":
              setWeatheState("wi-dust");
              break;
    
            default:
              setWeatheState("wi-day-sunny");
              break;
          }
        }
      }, [weathermood]);
  return (
    <div>
        <div className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='wheatherCondition'>{weathermood}</div>
                    <div className='place'>
                        {name}, {country} 
                    </div>
                </div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p> <i className={"wi wi-sunset"}></i> </p>
                        <p className='extra-info-leftside'>
                            {timeStr} <br />
                            Sunset
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p> <i className={"wi wi-humidity"}></i> </p>
                        <p className='extra-info-leftside'>
                            {humidity}  <br />
                            Humidity
                        </p>
                    </div>
                </div>
                <div className='weather-extra-info'>
                <div className='two-sided-section'>
                        <p> <i className={"wi wi-rain"}></i> </p>
                        <p className='extra-info-leftside'>
                            {pressure}  <br />
                            Pressure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p> <i className={"wi wi-strong-wind"}></i> </p>
                        <p className='extra-info-leftside'>
                            {speed}  <br />
                            speed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard