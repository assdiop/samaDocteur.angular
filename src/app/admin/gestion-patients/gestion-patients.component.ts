import { Component, OnInit } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-gestion-patients',
  templateUrl: './gestion-patients.component.html',
  styleUrls: ['./gestion-patients.component.scss']
})
export class GestionPatientsComponent implements OnInit {

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


