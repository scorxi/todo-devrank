import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddActivityListService {
  options = { withCredentials: true }
  baseUrl: string = 'https://todo.api.devcode.gethired.id';

  constructor(
    private http: HttpClient
  ) { }

  getAllActivity(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/activity-groups?email=${email}`, this.options)
      .pipe(map((response) => {
        return response;
      }))
  }
}
