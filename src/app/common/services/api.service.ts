import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUser } from '../models/interfaces';

const httpHeader = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  public getUsers = () => this.http.get<IUser[]>("https://jsonplaceholder.typicode.com/users", httpHeader);

  public getUserById = (id: string) => this.http.get("https://jsonplaceholder.typicode.com/users?id=" + id);

}
