import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly housingService = inject(HousingService);

  readonly housingLocation: HousingLocation | undefined;

  readonly applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication(): void {
    const firstName = this.applyForm.value.firstName ?? '';
    const lastName = this.applyForm.value.lastName ?? '';
    const email = this.applyForm.value.email ?? '';

    this.housingService.submitApplication(firstName, lastName, email);
    alert('Application submitted. Check console output.');
  }
}
