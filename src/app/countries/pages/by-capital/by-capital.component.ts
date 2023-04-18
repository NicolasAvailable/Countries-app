import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryREST } from '../../interfaces/countries.interface';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent implements OnInit {

  showError: boolean = false;
  loading: boolean = false;
  capitalReceived: CountryREST[] = [];

  constructor( private countriesService: CountriesService ) { }

  ngOnInit(): void {
  }

  receiveCapital(capitalName: any){

    this.countriesService.getCountriesByCapital( capitalName )
                          .pipe(
                            tap( () => this.loading = true),
                            catchError( err => {
                              console.log(err);
                              return of([])
                            })
                          )
                          .subscribe( capital => {
                            this.loading = false
                            this.showError = false
                            this.capitalReceived = capital;

                            if( capital.length === 0 ){
                              this.showError = true;
                            }

                          })
  }
}
