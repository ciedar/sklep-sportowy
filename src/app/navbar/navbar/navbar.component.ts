import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@ViewChild('hamburger', {static:false}) hamburgerBtn!: ElementRef<HTMLButtonElement>;
@ViewChild('one', {static:false}) hideOne!:  ElementRef<HTMLDivElement>;
@ViewChild('two', {static:false}) hideTwo!:  ElementRef<HTMLDivElement>;
  constructor(private elRef: ElementRef) {

  }

  hamburgerShow(element: MouseEvent) {
    // console.log(element)
    // console.log(this.hideOne.nativeElement.classList.forEach(a => {
    //   console.log('One:', a);
    // }))
    // console.log(this.hideTwo.nativeElement.classList.forEach((a) => {
    //   console.log('Two:',a);
    // }))
    this.hideTwo.nativeElement.classList.toggle('hidden');
    // this.hideOne.nativeElement.classList.toggle('hidden');
  }
}
