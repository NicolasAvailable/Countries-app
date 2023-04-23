import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryREST } from '../../interfaces/countries.interface';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  
  @Output() countries: EventEmitter<string> = new EventEmitter();

  inputCountries: FormGroup = new FormGroup({
    country: new FormControl('')
  });


  bring(){

    const CountriesName = this.inputCountries.get('country')?.value
  
    this.countries.emit( CountriesName )
  }


  constructor( ) { }

  ngOnInit(): void {
  }
}
