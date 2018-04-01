import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective implements OnInit{
  @Input('appColorChange') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.element.nativeElement.style.color = 'red'
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'blue')
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'yellow')
    // this.background = 'red';
    this.background = this.hoverColor;
}
  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red')
    // this.background = 'transparent';
    this.background = this.defaultColor;
  }
}
