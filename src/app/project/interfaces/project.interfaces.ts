export interface Project {
  readonly coord: Coord;
  readonly weather: Weather[];
  readonly base: string;
  readonly main: Main;
  readonly visibility: number;
  readonly wind: Wind;
  readonly rain: Rain;
  readonly clouds: Clouds;
  readonly dt: number;
  readonly sys: Sys;
  readonly timezone: number;
  readonly id: number;
  readonly name: string;
  readonly cod: number;
}

export interface Coord {
  readonly lon: number;
  readonly lat: number;
}

export interface Weather {
  readonly id: number;
  readonly main: string;
  readonly description: string;
  readonly icon: string;
}

export interface Main {
  readonly temp: number;
  readonly feels_like: number;
  readonly temp_min: number;
  readonly temp_max: number;
  readonly pressure: number;
  readonly humidity: number;
  readonly sea_level: number;
  readonly grnd_level: number;
}

export interface Wind {
  readonly speed: number;
  readonly deg: number;
  readonly gust: number;
}

export interface Rain {
  readonly '1h': number;
}

export interface Clouds {
  readonly all: number;
}

export interface Sys {
  readonly type: number;
  readonly id: number;
  readonly country: string;
  readonly sunrise: number;
  readonly sunset: number;
}
