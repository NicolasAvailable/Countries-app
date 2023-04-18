// angular's modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// modules created by myself
import { CountriesRoutingModule } from './countries-routing.module';


// Components
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { DidntFindComponent } from './components/didnt-find/didnt-find.component';
import { AboutCountryComponent } from './pages/about-country/about-country.component';
import { LoadingLogoComponent } from './components/loading-logo/loading-logo.component';




@NgModule({
  declarations: [
    ByRegionComponent,
    ByCapitalComponent,
    ByCountryComponent,
    InputComponent,
    TableComponent,
    DidntFindComponent,
    AboutCountryComponent,
    LoadingLogoComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
