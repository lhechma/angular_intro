import {Directive, HostListener} from '@angular/core';

@Directive({
 selector : '[appColorSwitch]'
})
export class ClickToSwitchDirective {
   @HostListener('mouseover', ['$event.target'])
   @HostListener('focus', ['$event.target'])
    switchColor(target) {
         target.style['color'] = 'blue';
    }

    @HostListener('mouseover', ['$event'])
    logEvent(event) {
         console.log(event);
    }
}
