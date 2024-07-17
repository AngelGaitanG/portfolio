import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailData } from './types/emailData.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://email-backend-w73h.onrender.com/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(EmailData: EmailData){
    return this.http.post(this.apiUrl, EmailData).subscribe((response) => {
      console.log(response);
    });
  }
}
