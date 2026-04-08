import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip {
  private tripService = inject(TripData);
  private router = inject(Router);

  newTrip = {
    name: '',
    image: '',
    description: ''
  };

  onSubmit(): void {
    this.tripService.addTrip(this.newTrip).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error adding trip:', err);
      }
    });
  }
}