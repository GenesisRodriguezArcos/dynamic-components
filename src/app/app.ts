import { Component, signal } from '@angular/core';
import { DashboardComponent } from './components/smart/dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dynamic-components');
}
