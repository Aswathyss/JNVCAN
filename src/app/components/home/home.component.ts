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
    { time: '03:00 PM', name: 'Memento Distribution' },
    { time: '03:15 PM', name: 'Stand-up Comedy (Mayavi)' },
    { time: '04:00 PM', name: 'Chingari Melam' },
    { time: '05:30 PM', name: 'Tea Break/Lelam' },
    { time: '06:30 PM', name: 'Team Calicut Comedy Show' },
    { time: '07:30 PM', name: 'Dance/Sinina' },
    { time: '08:00 PM', name: 'Dinner' },
    { time: '09:00 PM', name: 'Music Band' },
    { time: '11:00 PM', name: 'Prize Distribution(Bumper,Selfie,Video & Song)' },
    { time: '11:30 PM', name: 'DJ-Chenda Fusion' },
    // Add more events as needed
  ];

  day2Events = [
    { time: '09:00 AM', name: 'Event name and details to be updated' },
    { time: '10:00 AM', name: 'Event name and details to be updated' },
    // Add more events as needed
  ];

  showDay(day: number) {
    this.currentDay = day; // Switch between Day 1 and Day 2
  }
  navigateToRegister() {
     window.location.href = 'https://pages.razorpay.com/pl_PBDwScDrHVnXIA/view'; // Replace '/register' with your desired URL
  }
}
