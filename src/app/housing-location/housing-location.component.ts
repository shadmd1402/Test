import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
      <!-- <a [routerLink]="['/details', { id: housingLocation.id, name: housingLocation.name}]" >Details</a> //for button we pass param like this -->
      <a [routerLink]="['/details', housingLocation.id, housingLocation.name]" >Details1</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
