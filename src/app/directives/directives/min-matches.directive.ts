import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinMatches]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinMatchesDirective,
  multi: true}]
})
export class MinMatchesDirective implements Validator{

  @Input('appMinMatches') minMatches: string | undefined;


  constructor() { }

  validate( c: AbstractControl): {[key:string]: any} | null
  {
    if(this.minMatches && c.value){

      if (parseInt(this.minMatches) > parseInt(c.value)){

        return {minPower: true}
      }
    }
    return null;
  }

}
