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
  @HostBinding('class.visible') isOpen: boolean = false; 

  constructor(private elRef: ElementRef) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if(this.elRef.nativeElement.classList.contains('hidden')) {
      console.log('click')
      this.elRef.nativeElement.classList.toggle('hidden')
    }
  }
  
  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // console.log(this.elRef.nativeElement.classList.contains('hidden'))

    // if(this.elRef.nativeElement.classList.contains('custom')) {
    //   this.elRef.nativeElement.classList.toggle('hidden')
    //   console.log(this.elRef)
    // }

    
    if (!this.elRef.nativeElement.contains(target)) {
      this.isOpen = false; 
      
    }
  }
}