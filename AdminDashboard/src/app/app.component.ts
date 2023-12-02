import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showWelcomeNote: boolean = true;
  countdownSeconds: number = 5;

  ngOnInit() {
    const countdownInterval = setInterval(() => {
      this.countdownSeconds--;

      if (this.countdownSeconds === 0) {

        this.showWelcomeNote = false;
        clearInterval(countdownInterval); 
      }
    }, 1000);
  
  }
}
