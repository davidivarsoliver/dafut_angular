import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForDelay]'
})
export class ForDelayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

   }

   items: Array<number> = [];


   @Input()
   set appForDelayOf(array: number[]) {
     this.items = array;
     let i = 0;
     this.items.forEach( n => {
       setTimeout(()=>{
       this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: n})
       },100*i);
       i +=1;
     });
   }
}
