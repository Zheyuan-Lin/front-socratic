import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presurvey',
  template: `
    <div class="presurvey-container">
      <h1>Pre-Survey</h1>
      <div class="presurvey-content">
        <p>Please complete the following pre-survey questions:</p>
        <!-- Add your pre-survey questions here -->
        <div class="survey-questions">
          <!-- Example question -->
          <div class="question">
            <label>1. Have you participated in similar studies before?</label>
            <select [(ngModel)]="answers.q1">
              <option value="">Select an answer</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <!-- Add more questions as needed -->
        </div>
        <button [disabled]="!isSurveyComplete()" (click)="onContinue()">Continue</button>
      </div>
    </div>
  `,
  styles: [`
    .presurvey-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .presurvey-content {
      margin-top: 20px;
    }
    .question {
      margin: 20px 0;
    }
    select {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
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
export class PreSurveyComponent {
  answers = {
    q1: ''
  };

  constructor(private router: Router) {}

  isSurveyComplete(): boolean {
    return this.answers.q1 !== '';
  }

  onContinue() {
    if (this.isSurveyComplete()) {
      this.router.navigate(['/main']);
    }
  }
} 