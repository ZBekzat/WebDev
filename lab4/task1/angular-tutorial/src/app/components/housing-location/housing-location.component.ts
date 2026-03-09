import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HousingLocation } from '../../interfaces/housing-location';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  readonly housingLocation = input.required<HousingLocation>();
}
