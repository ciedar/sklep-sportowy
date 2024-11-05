import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sklep-sportowy';
  @Output() hamburgerOff = new EventEmitter<boolean>();
  constructor() {

  }


  closeHamburger(element: MouseEvent) {
    const target = element.target as HTMLElement;
    
    if(!target.closest('nav')) {
      const emit = false;
      this.hamburgerOff.emit(!emit);
    }
    
  }
}
