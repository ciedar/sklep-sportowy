import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.hidden') isOpen: boolean = false; 
  private otherElRef = document.querySelector('#two');
  constructor(private elRef: ElementRef) { }

  @HostListener('click') toggleOpen() {
    console.log(this)
  }
  
  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    // console.log(this.elRef.nativeElement)
    if(this.elRef.nativeElement) {
      console.log(this.elRef.nativeElement.classList)
      this.elRef.nativeElement.classList.toggle('hidden')
    }
  }
}