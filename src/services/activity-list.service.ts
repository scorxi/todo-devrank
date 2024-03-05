import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { ActivityDetail, ActivityList, addActivityPayload, AddActivityResponse, AddListItemPayload, Item, PatchActivityPayload, UpdateListItemPayload } from 'src/models/activity';

@Injectable({
  providedIn: 'root'
})

export class ActivityListService {
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

  getActivityById(activityId: string | null): Observable<ActivityDetail> {
    return this.http.get<ActivityDetail>(`${this.baseUrl}/activity-groups/${activityId}`)
      .pipe(map((response) => {
        return response;
      }))
  }

  addAnActivity(payload: addActivityPayload): Observable<AddActivityResponse> {
    return this.http.post<AddActivityResponse>(`${this.baseUrl}/activity-groups`, payload, this.options)
      .pipe(map((response) => {
        return response;
      }))
  }

  updateActivity(payload: PatchActivityPayload, activityId: string | null): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/activity-groups/${activityId}`, payload)
      .pipe(map((response) => {
        return response;
      }))
  }

  deleteActivity(activityId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/activity-groups/${activityId}`)
      .pipe(map((response) => {
        return response;
      }))
  }

  addListItem(payload: AddListItemPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/todo-items`, payload)
      .pipe(map((response) => {
        return response;
      }))
  }

  updateListItem(payload: UpdateListItemPayload, itemListId: string): Observable<Item> {
    return this.http.patch<Item>(`${this.baseUrl}/todo-items/${itemListId}`, payload)
      .pipe(map((response) => {
        return response;
      }))
  }

  deleteListItem(listItemId: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/todo-items/${listItemId}`)
      .pipe(map((response) => {
        return response
      }))
  }
}
