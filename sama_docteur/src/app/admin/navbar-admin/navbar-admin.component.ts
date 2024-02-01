import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent {


    @Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar(){
    this.toggleSidebarEvent.emit();
  }
}
