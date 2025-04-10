import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consent',
  template: `
    <div class="consent-container">
      <h1>Consent Form</h1>
      <div class="consent-content">
        <p>Thank you for participating in our study. Please read the following consent form carefully:</p>
        <!-- Add your consent form content here -->
        <div class="consent-checkbox">
          <input type="checkbox" [(ngModel)]="accepted" id="consent-checkbox">
          <label for="consent-checkbox">I have read and agree to the terms of this study</label>
        </div>
        <button [disabled]="!accepted" (click)="onContinue()">Continue</button>
      </div>
    </div>
  `,
  styles: [`
    .consent-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .consent-content {
      margin-top: 20px;
    }
    .consent-checkbox {
      margin: 20px 0;
    }
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  `]
})
export class ConsentComponent {
  accepted = false;

  constructor(private router: Router) {}

  onContinue() {
    if (this.accepted) {
      this.router.navigate(['/presurvey']);
    }
  }
} 