import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { TripList } from './trip-list/trip-list';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list', component: TripList },
  { path: 'add', component: AddTrip },
  { path: 'edit/:tripId', component: EditTrip }
];