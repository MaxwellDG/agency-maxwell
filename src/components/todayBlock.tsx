import React from 'react';
import { Weather } from '../models/weather';
import { getIcon, formatIconDesc } from '../util/icons'

export default class TodayBlock extends React.Component<Weather, {}>{

    render(){

        return(
            <div className='flex-col centered'>
                <h2>Today</h2>
                <div className='flex centered'>
                <img src={getIcon(this.props.icon)} alt="img-icon"/>
                <div>
                    <p>{this.props.temperature}</p>
                    <p>{formatIconDesc(this.props.icon)}</p>
                </div>
                </div>
            </div>
        )
    }
}