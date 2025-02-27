import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: false
})
export class ColorDirective {

  constructor(private el : ElementRef) { }

  @HostListener('click')
  onClick(){
    this.el.nativeElement.style.backgroundColor = 'red';
  }

}
