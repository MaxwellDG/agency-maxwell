import React from 'react';
import { Weather } from "../models/weather"
import { getIcon } from '../util/icons'
import { formatDate, farToCel } from '../util/formatting'


type Props = {
    day?: Weather,
    index: number
}

export default class WeatherBlock extends React.Component<Props, {}>{

    getBorderRadius(){
        switch(this.props.index){
            case 0: return {borderBottomLeftRadius: '7px'};
            case 3: return {borderBottomRightRadius: '7px'};
            default: return {};
        }
    }

    render(){

        return (
            <div style={this.getBorderRadius()} className='flex-col centered aligned weatherBlock-con'>
                {this.props.day &&
                <div className="flex-col aligned weatherBlock">
                    <p className='m0'>{formatDate(this.props.day.datetimeEpoch)}</p>
                    
                    <img src={getIcon(this.props.day.icon)} alt="img_weather"/>
                    <p className='temp'>{Math.round(farToCel(this.props.day.temp))}&#176;</p>
                </div>
                }
            </div>
        )
    }
}

