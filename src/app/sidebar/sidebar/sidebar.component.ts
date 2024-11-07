import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isOpen:any  = {
    filterSort: false,
    sortBy: false,
    productType: false,
    size: false,
    features: false,
    fit: false,
    activity: false,
    collection: false,
    color: false,
    pattern: false,
    discount: false
  };

  toggle(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }
}
