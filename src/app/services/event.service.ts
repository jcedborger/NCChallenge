import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly EVENT_NAME_KEY = 'event_name'
  private readonly END_DATE_KEY = 'end_date'

  constructor() {}

  setEventName(eventName: string): void {
    localStorage.setItem(this.EVENT_NAME_KEY, eventName)
  }

  getEventName(): string | null {
    return localStorage.getItem(this.EVENT_NAME_KEY)
  }

  setEndDate(endDate: string): void {
    localStorage.setItem(this.END_DATE_KEY, endDate)
  }

  getEndDate(): string | null {
    return localStorage.getItem(this.END_DATE_KEY)
  }
}
