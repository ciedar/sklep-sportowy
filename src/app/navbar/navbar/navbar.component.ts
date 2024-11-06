import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@ViewChild('two', {static:false}) hideTwo!:  ElementRef<HTMLDivElement>;

  constructor(private elRef: ElementRef, private router: Router) {

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
