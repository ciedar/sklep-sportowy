// import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.hidden') isOpen: boolean = false; 
//   // private otherElRef = document.querySelector;
//   constructor(private elRef: ElementRef) { }

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//     console.log(this.elRef)
      
    
//   }
  
//   @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {

//   }
// }
import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.hidden') isOpen: boolean = false; 

  constructor(private elRef: ElementRef) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  
  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    console.log(this.isOpen)
    
    if (!this.elRef.nativeElement.contains(target)) {
      console.log(this.isOpen)
      this.isOpen = false; 
      // console.log(this.elRef.nativeElement)
    }
  }
}