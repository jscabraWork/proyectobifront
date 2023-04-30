import { Component } from '@angular/core';
import { SentimentService } from '../sentiment.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  review: string="";
  sentiment: string="";

  constructor(private sentimentService: SentimentService) {}

  onSubmit(): void {
    this.sentimentService.predictSentiment(this.review).subscribe(response => {
      this.sentiment = response.sentiment;
    });
  }
}
