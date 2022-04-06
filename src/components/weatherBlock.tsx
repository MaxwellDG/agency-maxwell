import React from 'react';
import * as Weather from "../models/weather"
import { getIcon } from '../util/icons'

export default class WeatherBlock extends React.Component<Weather.Weather, {}>{

    getBorderRadius(){
        switch(this.props.index){
            case 0: return {borderBottomLeftRadius: '7px'};
            case 3: return {borderBottomRightRadius: '7px'};
            default: return {};
        }
    }

    render(){

        return (
            <div style={this.getBorderRadius()} className='weatherBlock-con'>
                <p>{this.props.day}</p>
                <img src={getIcon(this.props.icon)} alt="img_weather"/>
                <p>{this.props.temperature}&#176;</p>
            </div>
        )
    }
}

