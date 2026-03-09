import { Component, inject, signal } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly housingService = inject(HousingService);

  protected readonly allHousingLocations: HousingLocation[] = this.housingService.getAllHousingLocations();
  protected readonly filteredLocationList = signal<HousingLocation[]>(this.allHousingLocations);

  filterResults(city: string): void {
    if (!city.trim()) {
      this.filteredLocationList.set(this.allHousingLocations);
      return;
    }

    this.filteredLocationList.set(
      this.allHousingLocations.filter((location) =>
        location.city.toLowerCase().includes(city.toLowerCase())
      )
    );
  }
}
