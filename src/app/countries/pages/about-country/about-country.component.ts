import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { CountryREST } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-about-country',
  templateUrl: './about-country.component.html',
  styleUrls: ['./about-country.component.scss']
})
export class AboutCountryComponent implements OnInit {

  country!: CountryREST[];

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
                                switchMap( ({id}) => this.countriesServices.getCountriesByCca2(id))
                              )
                              .subscribe( country => {
                                console.log(country);
                                this.country = country;
                              })
  }

  goBack(){
    this.router.navigateByUrl('/countries/country')
  }

}
