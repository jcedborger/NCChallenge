import { Component, OnInit } from '@angular/core'
import { EventService } from '../../services/event.service'
import { FormsModule } from '@angular/forms'
import { FitTextDirective } from '../../fit-text.directive'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  standalone: true,
  imports: [FormsModule, FitTextDirective],
})
export class CountdownComponent implements OnInit {
  eventName: string = ''
  endDate: string = ''
  countdown: string = ''

  constructor(
    private eventService: EventService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.eventName = this.eventService.getEventName() || ''
    this.endDate = this.eventService.getEndDate() || ''
    this.updateTitle()
    this.updateCountdown()
    setInterval(() => this.updateCountdown(), 1000)
  }

  updateEvent(): void {
    this.eventService.setEventName(this.eventName)
    this.eventService.setEndDate(this.endDate)
    this.updateCountdown()
  }

  private updateCountdown(): void {
    if (!this.endDate) return

    const now = new Date().getTime()
    const end = new Date(this.endDate).getTime()
    const distance = end - now

    if (distance < 0) {
      this.countdown = 'Event has ended'
      this.updateTitle()
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    this.countdown = `${days} days, ${hours} h, ${minutes} m, ${seconds} s`
    this.updateTitle()
  }

  private updateTitle(): void {
    const title = this.eventName ? `${this.eventName} Countdown` : 'FrontendChallenge'
    this.titleService.setTitle(title)
  }
}
