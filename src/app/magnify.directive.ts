import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {
  height:string;
  width:string;
  
  constructor(private element:ElementRef, private renderer:Renderer2) {}
  @HostBinding('style.height')
  @HostBinding('style.width')
  @HostListener('mouseenter')onmouseenter(){
      this.height = '60px';
      this.width = '60px';
    }
  @HostListener('mouseout') onmouseleave() {
      this.height = '50px';
      this.width = '50px';
    }
}
