import React from 'react';
import { Forecast } from '../models/weather';
import { getIcon } from '../util/icons'
import { formatIconDesc, farToCel } from '../util/formatting'

type Props = {
    forecast?: Forecast
}

export default class TodayBlock extends React.Component<Props, {}>{

    render(){

        return(
            <div className='flex centered today-con'>
                <div className='flex-col centered today-inner-con'>
                <p style={{margin: '0 0 20px 0', fontSize: '1.5rem'}} className='text-center'>Today</p>
                {this.props.forecast && 
                    <div className="flex centered today-data-con">
                        <img src={getIcon(this.props.forecast.currently.icon)} alt="img-weather"/>
                        <div style={{marginLeft: '1rem'}}>
                            <p style={{fontSize: '3rem'}} className='temp'>{Math.round(farToCel(this.props.forecast.currently.temp))}&#176;</p>
                            <p>{formatIconDesc(this.props.forecast.currently.icon)}</p>
                        </div>
                    </div>
                }
                </div>
            </div>
        )
    }
}