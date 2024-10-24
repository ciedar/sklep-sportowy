import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DropdownDirective } from 'src/app/dropdown.directive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@ViewChild('hamburger', {static:false}) hamburgerBtn!: ElementRef<HTMLButtonElement>;
@ViewChild('one', {static:false}) hideOne!:  ElementRef<HTMLDivElement>;
@ViewChild('two', {static:false}) hideTwo!:  ElementRef<HTMLDivElement>;
  constructor(private elRef: ElementRef) {

  }

  ngOnInit(): void {
    console.log(DropdownDirective);
  }

  hamburgerShow(element: MouseEvent) {
    const click = element.target as HTMLElement
    this.hideTwo.nativeElement.classList.toggle('hidden');


    if(element.target != click) {
      console.log('asda')

    }

  }
}
