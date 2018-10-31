import { BehaviorSubject } from 'rxjs'
import { ICurrentWeather } from '../interfaces'
import { IWeatherService } from './weather.service'

export class WeatherServiceFake implements IWeatherService {
  private currentWeather = new BehaviorSubject<ICurrentWeather>({
    city: 'Pune',
    country: 'IN',
    date: Date.now(),
    image: '',
    temperature: 28.32,
    description: 'Sunny',
  })
  public getCurrentWeather(
    search: string | number,
    country?: string
  ): BehaviorSubject<ICurrentWeather> {
    return this.currentWeather
  }
}
