import { Directive, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appFitText]',
  standalone: true,
})
export class FitTextDirective implements AfterViewInit {
  @Input() maxFontSize: number = 100

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.resizeText()
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeText()
  }

  private resizeText() {
    const element = this.el.nativeElement
    let fontSize = this.maxFontSize

    element.style.fontSize = fontSize + 'px'

    while (element.scrollWidth > element.offsetWidth && fontSize > 10) {
      fontSize -= 1
      element.style.fontSize = fontSize + 'px'
    }
  }
}
