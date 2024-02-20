import { Component } from '@angular/core';

@Component({
  selector: 'app-main-docteur',
  templateUrl: './main-docteur.component.html',
  styleUrls: ['./main-docteur.component.scss']
})
export class MainDocteurComponent {


  
    isSidebarVisible: boolean = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
