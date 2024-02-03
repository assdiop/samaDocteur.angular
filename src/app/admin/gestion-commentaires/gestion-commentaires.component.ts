import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-commentaires',
  templateUrl: './gestion-commentaires.component.html',
  styleUrls: ['./gestion-commentaires.component.scss']
})
export class GestionCommentairesComponent {

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };
  }


}
