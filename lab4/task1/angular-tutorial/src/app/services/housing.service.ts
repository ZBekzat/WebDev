import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly housingLocationList: HousingLocation[] = [
    { id: 0, name: 'Acme Fresh Start Housing', city: 'Chicago', state: 'IL', photo: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=60', availableUnits: 4, wifi: true, laundry: true },
    { id: 1, name: 'A113 Transitional Housing', city: 'Santa Monica', state: 'CA', photo: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=60', availableUnits: 0, wifi: false, laundry: true },
    { id: 2, name: 'Warm Beds Housing Support', city: 'Juneau', state: 'AK', photo: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=60', availableUnits: 1, wifi: true, laundry: false },
    { id: 3, name: 'Homesteady Housing', city: 'Chicago', state: 'IL', photo: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=60', availableUnits: 1, wifi: true, laundry: false },
    { id: 4, name: 'Happy Homes Group', city: 'Gary', state: 'IN', photo: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=60', availableUnits: 1, wifi: true, laundry: false },
    { id: 5, name: 'Hopeful Apartment Group', city: 'Oakland', state: 'CA', photo: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=60', availableUnits: 2, wifi: true, laundry: true },
    { id: 6, name: 'Seriously Safe Towns', city: 'Oakland', state: 'CA', photo: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=60', availableUnits: 5, wifi: true, laundry: true },
    { id: 7, name: 'Hopeful Housing Solutions', city: 'Oakland', state: 'CA', photo: 'https://images.unsplash.com/photo-1467951591042-f388365db261?auto=format&fit=crop&w=1200&q=60', availableUnits: 2, wifi: true, laundry: true },
    { id: 8, name: 'Guarded Residency', city: 'Oakland', state: 'CA', photo: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=60', availableUnits: 2, wifi: false, laundry: true },
    { id: 9, name: 'Serene Housing', city: 'Chicago', state: 'IL', photo: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=60', availableUnits: 3, wifi: true, laundry: false }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((location) => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(`Home application received: firstName=${firstName}, lastName=${lastName}, email=${email}`);
  }
}
