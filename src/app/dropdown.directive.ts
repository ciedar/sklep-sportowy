import { Directive,  HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef) { 

  }
@HostBinding('class.block') isOpen: boolean = false;
@HostListener('click') toggleOpen() {
  this.isOpen = !this.isOpen;
} 

@HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
  if (!this.elRef.nativeElement.contains(event.target)) {
    this.isOpen = false;
  }
}


}
