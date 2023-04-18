import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

import { CountryREST } from '../../interfaces/countries.interface';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {

  showError: boolean = false;
  loading: boolean = false;
  countriesReceive: CountryREST[] = [];

  constructor( private countriesService: CountriesService ) { }

  ngOnInit(): void {
  }

  receiveCountries(countriesName: any ){
    
    this.countriesService.getCountries(countriesName)
                          .pipe( 
                            tap( () => {
                              this.loading = true;
                            }),
                            catchError( err => {
                              console.log(err);
                              return of([])
                            })
                           )
                          .subscribe( countries => {
                            this.showError = false;
                            this.loading = false;
                            this.countriesReceive = countries
                            console.log(this.countriesReceive);

                            if( this.countriesReceive.length === 0 ){
                              this.showError = true;
                            }
                          })
    
  }
}
