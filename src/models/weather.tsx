export type Weather = {
    icon: string;
    temperature: number;
    day: string;
    index: number;
}

export type Forecast = {
  city: string,
  currently: Weather,
  daily: Array<Weather>
}