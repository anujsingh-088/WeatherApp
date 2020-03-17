import React, { Component } from 'react';
//import './App.css';
import Forms from './components/Form'
import Titles from './components/Titles'
import Weather from './components/weather'

const API_KEY='bde3c6ed4ee49fd832c0a4096613eac9';

class App extends Component {
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather= async(e)=>{
    e.preventDefault();
    const city=e.target.city.value;
    const country=e.target.country.value; 
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data=await api_call.json();
    const val=this.setState({
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined
      }) ;
    if(city&&country)
      if(data.cod==='404'){
        val;
        this.setState({
          error:"Please Enter Valid the City and Country"
          }) }
    else{
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:undefined
      })
  }
    else
    {
     val;
     this.setState({
      error:"Please Enter the City and Country"
      })
    }
    
  }
  render() {
    return (
      <div>
         <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container"><Titles/></div>
                  <div className="col-xs-7 form-container">
                    {<Forms getWeather={this.getWeather}/>}
                    {<Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}/>}
                  </div>
                </div>
              </div>
            </div>
         </div>
      </div>
    );
  }
}
export default App;
