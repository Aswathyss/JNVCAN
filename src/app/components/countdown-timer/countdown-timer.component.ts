import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  targetDate = new Date('2024-12-28T00:00:00'); // Event date
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  intervalId: any;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = this.targetDate.getTime() - now;

      this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // If the countdown is finished, clear the interval
      if (timeLeft < 0) {
        clearInterval(this.intervalId);
        this.days = this.hours = this.minutes = this.seconds = 0;
      }
    }, 1000);
  }
}

