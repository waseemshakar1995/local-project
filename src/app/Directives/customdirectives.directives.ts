import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
    selector: '[appcustomdirectives]',
})
export class CustomDirectives implements OnInit{

    constructor(private element: ElementRef){}

    ngOnInit (){
      (this.element.nativeElement as HTMLElement).style.backgroundColor = 'blue';
    }

}