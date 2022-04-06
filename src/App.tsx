import React from 'react';
import './styles/styles.less';
import * as DarkSky from './apis/visualCrossing'
import { CITY_COORDS } from './util/constants'
import { Weather, Forecast } from "./models/weather"

import TodayBlock from './components/todayBlock';
import WeatherBlock from './components/weatherBlock';


type AppState = {
  weathers: Array<Forecast>,
  currentCity: string
}

export default class App extends React.Component<{}, AppState>{

  state = {
    weathers: [],
    currentCity: CITY_COORDS[0].name
  }

  componentDidMount(){
    CITY_COORDS.forEach((j, i) => {
      DarkSky.getWeather(j.coords).then(k => {
        console.log(k)
        const day: Forecast = {
          city: j.name,
          currently: k.data.currentConditions,
          daily: k.data.daily.data.map((l: any, index: number) => {
            // Index 0 is the same date as 'currently' property but set at midnight
            if(index >= 1 && index <= 4){
              return {...l, index} as Weather;
            } else return;
          })
        }

        console.log('Day?', day)
        
        this.setState(prevState => ({
          weathers: [...prevState.weathers, day]
        }));
      }).catch(e => console.log(e.message))
    })
  }


  render(){

    return (
      <div className="App">
        <ul className='flex cities'>
          {CITY_COORDS.map(j => 
            <li key={j.name} className='city-name'><button>{j.name}</button></li> // TODO something with active
          )}
        </ul>
        {/* <TodayBlock props={this.state} /> */}
        {/* {this.state.weathers?.daily.map((j: Weather, i: number) => {
          <WeatherBlock />
        })} */}
      </div>
    );
  }
}

