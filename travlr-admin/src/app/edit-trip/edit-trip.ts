import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripData, Trip } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip {
  private route = inject(ActivatedRoute);
  private tripService = inject(TripData);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  trip: Trip = {
    _id: '',
    name: '',
    image: '',
    description: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.tripService.getTrip(id).subscribe({
        next: (data) => {
          this.trip = data;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading trip:', err);
        }
      });
    }
  }

  onSubmit(): void {
  this.tripService.updateTrip(this.trip).subscribe({
    next: () => {
      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error('Error updating trip:', err);
    }
  });
  }
}