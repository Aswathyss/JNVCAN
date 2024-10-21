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
    { time: '10:00 AM', name: 'Reception and Registration' },
    { time: '11:00 AM', name: 'Event name and details to be updated' },
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
