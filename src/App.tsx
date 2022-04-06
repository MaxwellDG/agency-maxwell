import React from 'react';
import './styles/styles.less';
import * as VisualCrossing from './apis/visualCrossing'
import { CITY_COORDS } from './util/constants'
import { Weather, Forecast } from "./models/weather"

import TodayBlock from './components/todayBlock';
import WeatherBlock from './components/weatherBlock';


type AppState = {
  forecasts: Array<Forecast>,
  currentCity: string
}

export default class App extends React.Component<{}, AppState>{

  state = {
    forecasts: [],
    currentCity: CITY_COORDS[0].name
  }

  componentDidMount(){
    CITY_COORDS.forEach((j, i) => {
      VisualCrossing.getWeather(j.coords).then(k => {
        const day: Forecast = {
          city: j.name,
          currently: k.data.currentConditions as Weather,
          daily: k.data.days.filter((_: any, index: number) => {
            return index >= 1 && index <= 4 
          }).map((l: any) => {
           return {
             icon: l.icon,
             datetimeEpoch: l.datetimeEpoch,
             temp: l.temp
           } as Weather;
          })
        }

        this.setState(prevState => ({
          forecasts: [...prevState.forecasts, day]
        }));
      }).catch(e => console.log(e.message))
    })
  }

  getData(){
    
  }

  getButtonStyle(name: string){
    if(name === this.state.currentCity){
      return {color: '#5fb0e8', fontWeight: 800}
    }
  }

  handleCityClick(e: React.MouseEvent, name: string){
    this.setState({currentCity: name})
  }

  getTodaysForecast(){
    const forecast: Array<Forecast> = this.state.forecasts.filter((j: Forecast) => j.city === this.state.currentCity)
    return forecast[0];
  }


  render(){

    return (
      <div className="app">
        <ul className='flex centered aligned cities p0'>
          {CITY_COORDS.map(j => 
            <li key={j.name} className='city-name'>
              <button onClick={e => this.handleCityClick(e, j.name)} style={this.getButtonStyle(j.name)}>{j.name}</button>
            </li> 
          )}
        </ul>
        {this.state.forecasts.length > 0 && 
          <div className='main-block'>
            <TodayBlock forecast={this.getTodaysForecast()} />
            <ul className='flex centered p0 daily-con'>
              {this.getTodaysForecast() && this.getTodaysForecast().daily.map((j: Weather, i: number) => {
                return <WeatherBlock day={j} index={i} key={i}/>
              })}
            </ul>
          </div>
        }
      </div>
    );
  }
}

