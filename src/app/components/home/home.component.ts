import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentDay: number = 1; // Initially show Day 1

  // Define events for Day 1 and Day 2
  day1Events = [
    { time: '02:00 PM', name: 'Inauguration' },
    { time: '03:30 PM', name: 'Memento Distribution' },
    { time: '04:00 PM', name: 'Chingari Melam' },
    { time: '05:30 PM', name: 'Tea Break' },
    { time: '06:30 PM', name: 'Comedy Show - Team Calicut' },
    { time: '07:30 PM', name: 'Nritha Drisya Virunnu (Dance Show) - Narthaki School of Arts' },
    { time: '08:30 PM', name: 'Dinner' },
    { time: '09:30 PM', name: 'Octave\'s Music Band Show' },
    { time: '11:00 PM', name: 'Music Show - Team JNVC Band' },
    { time: '11:30 PM', name: 'Prize Distribution' },
    { time: '12:00 PM', name: 'DJ-Chenda Fusion by DJ Psycho' },
    // Add more events as needed
  ];

  day2Events = [
    { time: '10:00 AM', name: 'Tug of War (Batchwise)' },
    // Add more events as needed
  ];

  showDay(day: number) {
    this.currentDay = day; // Switch between Day 1 and Day 2
  }
  navigateToRegister() {
     window.location.href = 'https://pages.razorpay.com/pl_PBDwScDrHVnXIA/view'; // Replace '/register' with your desired URL
  }
}
