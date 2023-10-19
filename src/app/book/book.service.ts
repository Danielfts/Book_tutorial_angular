import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment,baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl: string = baseUrl + 'books';

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl);
  }

  constructor(private http: HttpClient) { }
}
