import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { LoaderService } from './loader.service';
import { ActivityList } from 'src/models/activity';

@Injectable({
  providedIn: 'root'
})
export class AddActivityListService {
  options = { withCredentials: false }
  baseUrl: string = 'https://todo.api.devcode.gethired.id';

  constructor(
    private http: HttpClient
  ) { }

  getAllActivity(email: string): Observable<ActivityList> {
    return this.http.get<ActivityList>(`${this.baseUrl}/activity-groups?email=${email}`, this.options)
      .pipe(map((response) => {
        return response;
      }))
  }
}
