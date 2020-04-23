import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = 'http://127.0.0.1:8000/api/users';

  constructor(private httpClient: HttpClient) { }

  createUser(data: any) {
    return this.httpClient.post(this.apiUrl, data)
  }
  updateUser(id: string, data: any) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, {...data})
  }
  getUser(id: string) {
    return this.httpClient.get(`${this.apiUrl}/${id}`)
  }
  getUsers() {
    return this.httpClient.get(this.apiUrl)
  }


}
