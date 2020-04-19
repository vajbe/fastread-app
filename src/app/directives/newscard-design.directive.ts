import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appNewscardDesign]'
})
export class NewscardDesignDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'box-shadow', '0px 3px #888888');
  }

  // @HostListener('click') onMouseOver(){
    
  // }
}
