import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'https://backuhmi.azurewebsites.net/api/person'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Person>(url);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.baseUrl, person);
  }

  updatePerson(id: number, person: Person): Observable<Person> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Person>(url, person);
  }

  deletePerson(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
export interface Person {
  id: number;
  name: string;
  age: number;
}

