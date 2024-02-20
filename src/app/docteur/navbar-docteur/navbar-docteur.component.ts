import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-docteur',
  templateUrl: './navbar-docteur.component.html',
  styleUrls: ['./navbar-docteur.component.scss']
})
export class NavbarDocteurComponent {

   @Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar(){
    this.toggleSidebarEvent.emit();
  }

}
