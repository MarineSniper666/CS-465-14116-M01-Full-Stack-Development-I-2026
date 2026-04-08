import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { TripData, Trip } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [TripCard],
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {

  private tripService = inject(TripData);
  private cdr = inject(ChangeDetectorRef);

  trips: Trip[] = [];

  ngOnInit(): void {
  console.log('ngOnInit fired');

  this.tripService.getTrips().subscribe({
    next: (data) => {
      console.log('Trips received:', data);
      this.trips = data;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error loading trips:', err);
    }
  });
  }

  removeTrip(id: string): void {
  this.tripService.deleteTrip(id).subscribe({
    next: () => {
      this.trips = this.trips.filter(trip => trip._id !== id);
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error deleting trip:', err);
    }
  });
}
}