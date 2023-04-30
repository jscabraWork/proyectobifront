import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private readonly API_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // Método para predecir el sentimiento basado en una reseña de texto
  predictSentiment(review: string): Observable<{ sentiment: string }> {
    return this.http.post<{ sentiment: string }>(`${this.API_URL}/predict`, {
      review: review
    });
  }

  // Método para predecir el sentimiento basado en una reseña con un ID específico
  predictSentimentById(reviewId: number): Observable<{ sentiment: string }> {
    return this.http.get<{ sentiment: string }>(`${this.API_URL}/predict/${reviewId}`);
  }

  // Método para actualizar una reseña existente y predecir el sentimiento
  updateReviewAndPredictSentiment(reviewId: number, review: string): Observable<{ sentiment: string }> {
    return this.http.post<{ sentiment: string }>(`${this.API_URL}/predict/${reviewId}`, {
      review: review
    });
  }
}
