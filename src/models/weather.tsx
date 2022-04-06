export type Weather = {
  icon: string;
  temp: number;
  datetimeEpoch: number;
}

export type Forecast = {
  city: string,
  currently: Weather,
  daily: Array<Weather>
}