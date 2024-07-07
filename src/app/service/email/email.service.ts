import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://email-backend-w73h.onrender.com/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: { name: string; email: string; message: string }){
    return this.http.post<any>(this.apiUrl, emailData).subscribe((response) => {
      console.log(response);
    });
  }
}
