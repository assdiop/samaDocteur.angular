import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar(){
    this.toggleSidebarEvent.emit();
  }
}
