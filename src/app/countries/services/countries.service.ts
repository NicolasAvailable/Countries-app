import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { CountryREST } from '../interfaces/countries.interface';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( private http: HttpClient ) { }

  private _url = environment.apiUrlCountries;

  // with this function we can bring the countries and show it
  getCountries( countryName: string ){
    const url: string = `${this._url}/name/${countryName}`;

    return this.http.get<CountryREST[]>(url);
  }

  // with this function we only can search the country by it capital
  getCountriesByCapital( capitalName: string ){
    const url: string = `${this._url}/capital/${capitalName}`;

    return this.http.get<CountryREST[]>(url)
  }

  // with this function we can search just one country by it code
  getCountriesByCca2( code: string ){
    const url: string = `${this._url}/alpha/${code}`

    return this.http.get<CountryREST[]>(url)
  }

  // with this function we can bring the countries by their regions
  getCountriesByRegion( region: string ){
    const url: string = `${this._url}/region/${region}`

    return this.http.get<CountryREST[]>(url)
  }


}
