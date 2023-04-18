import { Component, Input, OnInit } from '@angular/core';
import { CountryREST } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() countriesToShow: CountryREST[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
