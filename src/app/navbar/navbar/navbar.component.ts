import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@ViewChild('two', {static:false}) hideTwo!:  ElementRef<HTMLDivElement>;

  constructor(private elRef: ElementRef) {

  }

  ngOnInit(): void {

  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clicked = event.target as HTMLElement
    if(!clicked.closest('nav') && !clicked.closest('.custom') ) {
      this.hideTwo.nativeElement.classList.add('hidden')
    }
  }
  

  hamburgerShow(element: MouseEvent) {
    this.hideTwo.nativeElement.classList.toggle("hidden")
  }
  
}
