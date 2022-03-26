import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHeaderSwitch]'
})
export class HeaderSwitchDirective {

  constructor() { }

  @Input() @HostBinding("class.alt-color") public isAlt = false;

}
