import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http_client: HttpClient) {
  }

  addBook(data: any) {
    return this.http_client.post(`${environment.baseUrl}/AddBook/`, data);
  }

  getBook() {
    return this.http_client.get(`${environment.baseUrl}/AffBook`);
  }

  getBookById(id: any) {
    return this.http_client.get(`${environment.baseUrl}/bookbyid/` + id)
  }

  updateBook(id: any, data: any) {
    return this.http_client.put(`${environment.baseUrl}/UpdateBook/` + id, data);
  }

  deleteBook(id: any) {
    return this.http_client.delete(`${environment.baseUrl}/DeleteBook/` + id);
  }
}
