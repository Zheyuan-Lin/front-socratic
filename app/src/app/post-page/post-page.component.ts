import { Component } from '@angular/core';

@Component({
  selector: 'app-post-page',
  template: `
    <div class="post-page-container">
      <h1>Thank You!</h1>
      <div class="post-page-content">
        <p>Thank you for participating in our study. Your responses have been recorded.</p>
        <div class="completion-message">
          <p>You have completed all parts of the study:</p>
          <ul>
            <li>Consent Form ✓</li>
            <li>Pre-Survey ✓</li>
            <li>Main Activity ✓</li>
            <li>Post-Survey ✓</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .post-page-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .post-page-content {
      margin-top: 20px;
    }
    .completion-message {
      margin-top: 30px;
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 4px;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      margin: 10px 0;
      padding-left: 20px;
      position: relative;
    }
    li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #28a745;
    }
  `]
})
export class PostPageComponent {} 