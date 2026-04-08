import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Trip } from '../services/trip-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard {
  @Input() trip!: Trip;

  @Output() deleteTrip = new EventEmitter<string>();
  private router = inject(Router);


  onDelete() {
    this.deleteTrip.emit(this.trip._id);
  }

  onEdit(): void {
  this.router.navigate(['/edit-trip', this.trip._id]);
}
}