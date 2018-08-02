import { Directive, Input, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() fontsize:string;
  @Input() fontFamily:string;

  constructor(private element:ElementRef, private renderer:Renderer2) { 
    console.log('font Size' + this.fontsize);
  }
  ngOnInit(){ 
    console.log('font Size' + this.fontsize);
    this.renderer.setStyle(this.element.nativeElement, 'fontSize', this.fontsize);
    this.renderer.setStyle(this.element.nativeElement, 'fontfamily', this.fontFamily);
  }
}
