import React, { useEffect, useState } from 'react'
import "./style.css"
import WeatherCard from './WeatherCard';
const Temp = () => {
    const [search, setSearch] = useState("panchkula");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8f9d5a44ed90a79ea67252e8ea0e4a1c`;
            const res = await fetch(url);
            const data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setTempInfo(myNewWeatherInfo);
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        getWeatherInfo();
    },[]);
  return (
    <div>
        <div className='wrap'>
            <div className='search'>
                <input type="search" placeholder='search.....' value={search} onChange={(e)=>setSearch(e.target.value)} autoFocus id='search' className='searchTerm'/>
                <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
            </div>
        </div>
        <WeatherCard tempInfo={tempInfo}/>
    </div>
  )
}

export default Temp;