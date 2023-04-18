import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { AboutCountryComponent } from './pages/about-country/about-country.component';

// CHILD ROUTES

const routesChild: Routes = [
  {
    path: 'country',
    component: ByCountryComponent
  },
  {
    path: 'capital',
    component: ByCapitalComponent
  },
  {
    path: 'region',
    component: ByRegionComponent
  },
  { 
    path: ':id', 
    component: AboutCountryComponent 
  },
  {
    path: '**',
    redirectTo: 'country'
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesChild)
  ]
})
export class CountriesRoutingModule { }
