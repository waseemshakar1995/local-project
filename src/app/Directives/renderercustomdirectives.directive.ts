import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRenderercustomdirectives]'
})
export class RenderercustomdirectivesDirective implements OnInit{
  
   @HostBinding('style.backgroundColor') color:string= '';
  constructor(private element:ElementRef, private renderer: Renderer2) { }


  ngOnInit()  {}

  @HostListener('mouseenter') onmouseover(event: Event) {
   this.color = 'red';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.color = 'green';
  }
  @HostListener('click') onclick() {
    this.color = 'yellow';
    console.log("yellow clicked");
    
    
  }
  @HostListener('dblclick') ondblclick () {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'brown')
    console.log('double clicked');
    
  }

}
