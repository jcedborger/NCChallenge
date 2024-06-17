import { Component } from '@angular/core'
import { CountdownComponent } from './components/countdown/countdown.component'
import { FitTextDirective } from './fit-text.directive'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CountdownComponent],
})
export class AppComponent {
  title = 'Natural Cycles FrontendChallenge'
}
