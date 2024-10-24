
import { Directive, HostListener, HostBinding, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @ViewChild('hamburger', {static: true}) hamburger!: ElementRef<HTMLDivElement>;
  @HostBinding('class.hidden') isOpen: boolean = false; 

  constructor(private elRef: ElementRef) { 

  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log(this.hamburger);

  }
  
  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.elRef.nativeElement.contains(target)) {
      this.isOpen = false; 
      
    }
  }
}