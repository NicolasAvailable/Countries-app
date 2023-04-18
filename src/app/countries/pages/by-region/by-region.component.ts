import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryREST } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent implements OnInit {

  regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionsReceived: CountryREST[] = [];
  showError: boolean = false;
  loading: boolean = false;

  constructor( private countriesService: CountriesService ) { }

  ngOnInit(): void {
  }

  getRegion( regionToSearch: string ) {
  
    const region = regionToSearch;

    this.countriesService.getCountriesByRegion(region)
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
                            this.regionsReceived = countries
                            console.log(this.regionsReceived);

                            if( this.regionsReceived.length === 0 ){
                              this.showError = true;
                            }
                          })
      
  }

}
